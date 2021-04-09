import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";

function _draw() {
    document.body.style.backgroundImage = `url(${ProxyState.images.large_url})`;

}

export default class ImagesController {
    constructor() {
        ProxyState.on('images', _draw);

        this.getImage()
    }

    async getImage() {
        try {
            await imagesService.getImage()
        } catch (error) {
            console.error(error)
        }
    }
}