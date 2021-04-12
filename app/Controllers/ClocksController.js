import { ProxyState } from "../AppState.js";
import { clocksService } from "../Services/ClocksService.js";



export default class ClocksController {
    constructor() {
        this.showTime()
    }


    showTime() {

        clocksService.showTime()

    }

}