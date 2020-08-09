export default class NoteViewer {
    static open(elem) {
        this.modal = document.getElementById("noteViewer").parentElement;
        this.viewer = document.getElementById("noteViewer");

        const title = this.viewer.querySelector("#title");
        const content = this.viewer.querySelector("#content");

        this.note = elem; // set the note to the element

        title.value = this.note.querySelector("#note__title").textContent;
        content.value = this.note.querySelector("#note__content").textContent;

        this.modal.classList.add("open");
    }

    static bindOnSaveClick(handler) {
        const title = this.viewer.querySelector("#title").value;
        const content = this.viewer.querySelector("#content").value;

        const saveBtn = this.viewer.querySelector("#saveBtn");

        saveBtn.addEventListener("click", () => {
            if (title.length > 0) {
                console.log(this.note.dataset.numberId);
                handler(title, content, this.note.dataset.numberId);
            }
        });
    }
}
