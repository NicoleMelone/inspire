import { ProxyState } from "../AppState.js";
import { weatherApi } from "../Services/AxiosService.js";
import { weathersService } from "../Services/WeathersService.js";

function _draw() {
    document.getElementById('weathers').innerHTML = ProxyState.weathers.Template

}

export default class WeathersController {
    constructor() {
        ProxyState.on('weathers', _draw);

        this.getWeather()
    }

    async getWeather() {
        try {
            await weathersService.getWeather()
        } catch (error) {
            console.error(error)
        }
    }

    async toggleWeather() {
        try {
            await weathersService.toggleWeather()
        } catch (error) {
            console.error(error)
        }
    }
}