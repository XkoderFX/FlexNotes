import ManageBar from "./views/manageBar.js";
import NoteEditor from "./views/noteEditor.js";
import noteViewer from "./views/noteViewer.js";
import Note from "./views/note.js";
import NoteViewer from "./views/noteViewer.js";

class Controller {
    constructor() {
        /** TODO:
         *  initDb
         *  restoreDAta
         *  noteViewer
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
                note.appendToPage();

                note.onClick = (elem) => {
                    NoteViewer.open(elem);

                    noteViewer.bindOnSaveClick(() => {});
                };
            };
        };
    }
}

const controller = new Controller();
