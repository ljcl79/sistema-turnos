import Service from "./Service";

class TestimonialServices extends Service {
    static async getTestimonialContent(link: string) {
        return this.getContent(link, '/testimonials')
    }
}

export default TestimonialServices;