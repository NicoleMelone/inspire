import Image from "../Models/Image.js";
import { ProxyState } from "../AppState.js";
import { imageApi } from "./AxiosService.js";


class ImagesService {
    async getImage() {
        let res = await imageApi.get()
        ProxyState.images = new Image(res.data)
    }
}

export const imagesService = new ImagesService()