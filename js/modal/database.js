export default class Database {
    constructor(name, version) {
        this.name = name;
        this.version = version;
        this.existed = true; //assume the database was existed
    }

    init() {
        const openRequest = indexedDB.open(this.name, this.version);

        openRequest.addEventListener("upgradeneeded", (e) => {
            switch (e.oldVersion) {
                case 0:
                    openRequest.result.createObjectStore("notes", {
                        keyPath: "_id",
                    });
                    this.existed = false;
                    break;
                default:
                    break;
            }
        });
        return new Promise((r) => {
            openRequest.addEventListener("success", () => {
                this.DB = openRequest.result;
                r(this.DB);
            });
        });
    }

    addNote(note) {
        const transaction = this.DB.transaction("notes", "readwrite");

        const notes = transaction.objectStore("notes");

        const addRequest = notes.add(note);

        return new Promise((r) => {
            addRequest.addEventListener("success", () => {
                r();
            });
        });
    }

    updateNote(note) {
        const transaction = this.DB.transaction("notes", "readwrite");

        const notes = transaction.objectStore("notes");
        const putRequest = notes.put(note);

        return new Promise((r) => {
            putRequest.addEventListener("success", () => r());
        });
    }

    deleteNote(ID) {
        const transaction = this.DB.transaction("notes", "readwrite");

        console.log(ID);

        const notes = transaction.objectStore("notes");

        //ensure removing by convert the ID to number
        const deleteRequest = notes.delete(+ID);

        return new Promise((r) => {
            deleteRequest.addEventListener("success", () =>
                console.log("Hello")
            );
        });
    }

    async getNotes() {
        const transaction = this.DB.transaction("notes", "readonly");
        const notesStorage = transaction.objectStore("notes");

        const getAllRequest = notesStorage.getAll();

        return new Promise((r) => {
            getAllRequest.addEventListener("success", () => {
                return r(getAllRequest.result);
            });
        });
    }
}
