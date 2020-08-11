import ManageBar from "./views/manageBar.js";
import NoteEditor from "./views/noteEditor.js";
import NoteViewer from "./views/noteViewer.js";
import Note from "./views/note.js";
import Database from "./model/database.js";

class Controller {
    constructor() {
        this.initDB()
            .then(() => this.restoreDATA())
            .then(() => this.initManageBar());
    }

    initManageBar() {
        const manageBar = new ManageBar();

        manageBar._onClickAdd = () => {
            const Editor = new NoteEditor();
            Editor.open();

            Editor.onClickSave = (title, content) => {
                const note = new Note(title, content);
                note.appendToPage();

                this.DB.addNote(note);

                this.initNote(note);
            };
        };

        manageBar.onSearch = this.initSearch;
    }

    initSearch(searchTitle) {
        //convert NoteList to regular array for use array method filter

        const NoteList = [...document.getElementById("noteList").children];

        //unhide all notes
        NoteList.forEach((note) => note.classList.remove("close"));

        //hide all notes which not includes the title
        NoteList.filter(
            (note) =>
                !note
                    .querySelector("#note__title")
                    .textContent.includes(searchTitle)
        ).forEach((note) => note.classList.add("close"));
    }

    initNote(note) {
        note.onClick = (elem) => {
            NoteViewer.open(elem);

            NoteViewer.bindOnSaveClick((title, content, ID) => {
                const elem = [
                    ...document.getElementById("noteList").children,
                ].find((r) => {
                    return ID == r.dataset.numberId;
                });

                const titleOLD = elem.querySelector("#note__title");
                const contentOLD = elem.querySelector("#note__content");

                note.changeID(+ID);
                note.changeContentTitle(title, content);

                titleOLD.textContent = title;
                contentOLD.textContent = content;

                //becuase of cloning problems we need to create a clone without onClick handler
                const NOTEclone = Object.assign({}, note);
                delete NOTEclone._onClick;

                this.DB.updateNote(NOTEclone);
            });

            NoteViewer.bindDeleteBtn((id) => {
                this.DB.deleteNote(id);
            });
        };
    }

    async initDB() {
        const openDb = new Database("FlexNotesDB", 1);
        await openDb.init();
        this.DB = openDb;
    }

    async restoreDATA() {
        if (this.DB.existed) {
            const notes = await this.DB.getNotes();
            notes.forEach(({ title, content, _id }) => {
                const note = new Note(title, content);
                /**change the id to the one in database
                 * unless we do that we won't be
                 * able to remove a note
                 * because it has new id
                 * that database didn't have
                 */

                note.changeID(_id);
                note.appendToPage(); //then append to page

                this.initNote(note);
            });
        }
    }
}

const controller = new Controller();
