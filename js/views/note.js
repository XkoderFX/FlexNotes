export default class Note {
    constructor(title, content) {
        //generate unique id it's the children length
        const id = document.getElementById("noteList").childElementCount;

        this._HTML = `
        <div class="Notes__note" data-number-id="${id}">
            <h3 id="note__title">${title}</h3>
            <p id="note__content">${content}</p>
        </div>`;
    }

    appendToPage() {
        document
            .getElementById("noteList")
            .insertAdjacentHTML("beforeend", this._HTML);
    }
}
