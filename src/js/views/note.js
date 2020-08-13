export default class Note {
    constructor(title, content) {
        //generate unique id it's the children length
        this._id = document.getElementById("noteList").childElementCount;

        if (document.getElementById("noteList").children.length > 0) {
            const children = [...document.getElementById("noteList").children];

            let id = children
                .map((elem) => elem.dataset.numberId)
                .reduce((acc, item) => acc + item);

            id++;
            this._id = +id;
        }

        this.title = title;
        this.content = content;

        this._HTML = `
            <div class="Notes__note" data-number-id="${this._id}">
                <h3 id="note__title">${title}</h3>
                <p id="note__content">${content}</p>
            </div>`;
    }

    initLocalEvents() {
        const children = [...document.getElementById("noteList").children];

        const thisElem = children.find((r) => {
            return this._id == r.dataset.numberId;
        });

        thisElem.addEventListener("click", () => {
            this._onClick(thisElem);
        });
    }

    appendToPage() {
        document
            .getElementById("noteList")
            .insertAdjacentHTML("beforeend", this._HTML);
        this.initLocalEvents();
    }

    set onClick(handler) {
        this._onClick = handler;
    }

    changeContentTitle(title, content) {
        this.title = title;
        this.content = content;

        this._HTML = `
        <div class="Notes__note" data-number-id="${this._id}">
            <h3 id="note__title">${title}</h3>
            <p id="note__content">${content}</p>
        </div>`;
    }

    changeID(id) {
        this._id = id;
        this._HTML = `
        <div class="Notes__note" data-number-id="${id}">
            <h3 id="note__title">${this.title}</h3>
            <p id="note__content">${this.content}</p>
        </div>`;
    }
}
