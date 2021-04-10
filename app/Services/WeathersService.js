import Weather from "../Models/Weather.js";
import { ProxyState } from "../AppState.js";
import { weatherApi } from "./AxiosService.js";

class WeathersService {
    async getWeather() {
        let res = await weatherApi.get()
        ProxyState.weathers = new Weather(res.data)
    }

    async toggleWeather() {


        this.getWeather()
    }
}

export const weathersService = new WeathersService()