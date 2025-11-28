async function fetch_photos() {
    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=2&limit=4`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        return []
    }
}

export default fetch_photos
