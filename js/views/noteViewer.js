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

        this.modal
            .querySelector("#closeBtn")
            .addEventListener("click", () => NoteViewer.close());

        title.focus();
    }

    static close() {
        this.modal.classList.remove("open");
    }

    static bindOnSaveClick(handler) {
        saveBtn.addEventListener("click", () => {
            const title = this.viewer.querySelector("#title").value;
            const content = this.viewer.querySelector("#content").value;

            const saveBtn = this.viewer.querySelector("#saveBtn");

            if (title.length > 0) {
                NoteViewer.close();
                handler(title, content, this.note.dataset.numberId);
            }
        });
    }

    static bindDeleteBtn(handler) {
        const deleteBtn = this.viewer.querySelector("#deleteBtn");
        deleteBtn.addEventListener("click", () => {
            NoteViewer.close();
            const id = this.note.dataset.numberId;
            NoteViewer.note.remove();
            handler(id);
        });
    }
}
