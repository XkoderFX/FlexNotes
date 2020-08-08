import ManageBar from "./views/manageBar.js";
import NoteEditor from "./views/noteEditor.js";
import Note from "./views/note.js";

class Controller {
    constructor() {
        /** TODO:
         *  initDb
         *  restoreDAta
         */
        this.initManageBar();
    }

    initManageBar() {
        const manageBar = new ManageBar();

        manageBar._onClickAdd = () => {
            const Editor = new NoteEditor();
            Editor.open();

            Editor.onClickSave = (title, content) => {
                const note = new Note(title, content);
                console.log(note);
                note.appendToPage();
            };
        };
    }
}

const controller = new Controller();
