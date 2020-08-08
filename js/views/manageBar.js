export default class ManageBar {
    constructor() {
        this.initLocalEvents();
    }

    initLocalEvents() {
        this.initAddBtn();
    }

    initAddBtn() {
        const AddbtnDOM = document.getElementById("addBtn");

        AddbtnDOM.addEventListener("click", () => {
            this._onClickAdd();
        });
    }

    set onClickAdd(handler) {
        this._onClickAdd = handler;
    }
}
