import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";

function _draw() {
    document.getElementById('quotes').innerHTML = ProxyState.quotes.Template
}

export default class QuotesController {
    constructor() {
        ProxyState.on('quotes', _draw);

        this.getQuote()
    }

    async getQuote() {
        try {
            await quotesService.getQuote()
        } catch (error) {
            console.error(error)
        }
    }
}