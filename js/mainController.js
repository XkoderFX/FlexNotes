import ManageBar from "./views/manageBar.js";
import NoteEditor from "./views/noteEditor.js";
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

            Editor.onClickSave = (title, content) => {};
        };
    }
}

const controller = new Controller();
