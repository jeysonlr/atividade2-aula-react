
const urlApi = 'https://kitsu.io/api/edge/anime?';

export async function getAnimes({ text }) {

    try {
        const request = await fetch(
            `${urlApi}filter[text]=${text}&page[limit]=12`
        );

        const result = request.json();

        return result;
    } catch (error) {
        throw error;
    }
}
