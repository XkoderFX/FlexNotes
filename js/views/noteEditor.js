export default class NoteEditor {
    constructor() {
        // add noteEditor actual HTML
        this._HTML = `<div id="noteEditor">
        <h3>Take a note</h3>
        <input
            id="title"
            type="text"
            placeholder="title"
            class="Xinput-text"
            required="true"

            />
            <textarea
            id="content"
            placeholder="content"
            class="Xinput-text"
            ></textarea>

            <div class="buttons">
            <button id="saveBtn"  class="Xbtn-primary">save</button>
            <button id="closeBtn" class="Xbtn-primary">close</button>
            <button id="deleteBtn" class="Xbtn-toggler">
                <i class="fas fa-trash-alt"></i>
            </button>
            </div>
        </div>`;
    }

    initLocalEvents() {
        this.initSaveBtn();
    }

    initSaveBtn() {
        const titleInput = document.getElementById("title");
        const contentInput = document.getElementById("title");

        const saveBtnDOM = document.getElementById("saveBtn");

        saveBtnDOM.addEventListener("click", () => {
            if (titleInput.value.length > 0) {
                this._onClickSave(titleInput.value, contentInput.value);
            }
        });
    }

    open() {
        document.getElementById("noteEditor")?.remove(); //limit creation
        const list = document.getElementById("noteList");

        list.insertAdjacentHTML("beforeend", this._HTML);

        document.getElementById("title").focus(); //make focus on

        this.initLocalEvents();
    }

    close() {
        document.getElementById("noteEditor").remove();
    }

    set onClickSave(handler) {
        this._onClickSave = handler;
    }
}
