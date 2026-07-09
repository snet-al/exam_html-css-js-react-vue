export async function getPhotos() {
    const randomPage = Math.floor(Math.random() * 50)
    const response = await fetch(`https://picsum.photos/v2/list?limit=4&page=${randomPage}`)
    return response.json()
}