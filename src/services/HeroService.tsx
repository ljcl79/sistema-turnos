import Service from "./Service";

class HeroServices extends Service {
    static async getHeroContent(link: string) {
        return this.getContent(link, '/hero')
    }
}

export default HeroServices;