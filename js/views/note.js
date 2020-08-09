export default class Note {
    constructor(title, content) {
        //generate unique id it's the children length
        this._id = document.getElementById("noteList").childElementCount;

        this._HTML = `
        <div class="Notes__note" data-number-id="${this._id}">
            <h3 id="note__title">${title}</h3>
            <p id="note__content">${content}</p>
        </div>`;
    }

    initLocalEvents() {
        const thisElem = document.getElementById("noteList").children[this._id];

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
}
