export default class ManageBar {
    constructor() {
        this.initLocalEvents();
    }

    initLocalEvents() {
        this.initAddBtn();
        this.initSearchBtn();
    }

    initAddBtn() {
        const AddbtnDOM = document.getElementById("addBtn");

        AddbtnDOM.addEventListener("click", () => {
            this._onClickAdd();
        });
    }

    initSearchBtn() {
        const SearchbtnDOM = document.getElementById("searchInput");

        SearchbtnDOM.addEventListener("input", () => {
            const searchTitle = document.getElementById("searchInput").value;
            this._onSearch(searchTitle);
        });
    }

    set onClickAdd(handler) {
        this._onClickAdd = handler;
    }

    set onSearch(handler) {
        this._onSearch = handler;
    }
}
