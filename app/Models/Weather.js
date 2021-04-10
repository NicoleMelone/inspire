export default class Weather {
    constructor({ name, main, weather }) {
        this.name = name
        this.main = main.temp
        this.weather = weather.description
    }

    get Template() {
        return `<div class="col ml-auto p-2">
        <h4>${this.weather}${Math.floor(((this.main - 273.15) * 1.8) + 32)}F</h4>
        <p>${this.name}</p>
    </div>`
    }

    get CelTemplate() {
        return `<div class="col ml-auto p-2">
        <h3>${this.weather}${Math.floor(this.main - 273.15)}C</h3>
        <p>${this.name}</p>
    </div>`
    }
}