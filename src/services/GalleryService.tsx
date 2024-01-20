import Service from "./Service";

class GalleryServices extends Service {
    static async getGalleryContent(link: string) {
        return this.getContent(link, '/services')
    }
}

export default GalleryServices;