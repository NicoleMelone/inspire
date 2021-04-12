export default class Quote {
    constructor({ content, author }) {
        this.content = content
        this.author = author
    }

    get Template() {
        return `<div class="col">
        <h4 class="quote-font">${this.content}</h4>
        <div class="author p-2">
            <p class="m-0">${this.author}</p>
        </div>
    </div>`
    }
}