import ICardRecord from "../interfaces/ICardRecord";

class Service {
    static async getContent(link: string, method: string) {
        try {
            const data = await fetch(`${link}${method}`);
            const json = await data.json();
            const lista: ICardRecord[] = [];

            for (const item of json) {
                const obj: ICardRecord = Object.assign({}, item);
                obj.urlImage = item.url;
                lista.push(obj);
            }

            return { 'success': true, lista };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            return { 'success': false, 'message': e.message }
        }
    }
}

export default Service;