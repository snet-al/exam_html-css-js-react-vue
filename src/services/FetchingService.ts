interface PictureData {
    author : string,
    id : number
    url : string,
    blob : string,
}
class FetchingService {
    static async fetchRandom(grayscale : boolean) : Promise<PictureData> {
        const pic = await fetch(`https://picsum.photos/351/250${grayscale ? "?grayscale" : ""}`)
        const id = pic.headers.get("Picsum-ID")
        const idNum = id ? parseInt(id) : 0
        const blob = URL.createObjectURL(await pic.blob())
        const {author, url} = await (await fetch(`https://picsum.photos/id/${idNum}/info`)).json()
        return {author, id : idNum, url, blob}
    }
    static async fetchSpecific(id : number, grayscale : boolean) {
        const pic = await fetch(`https://picsum.photos/id/${id}/351/250${grayscale ? "?grayscale" : ""}`)
        return URL.createObjectURL(await pic.blob())
    }
}
export default FetchingService
export {type PictureData}
