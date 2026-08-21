export const loadPhoto = async (id) => {
    const response = await fetch (`https://picsum.photos/id/${id}/info`)
    const data = await response.json()
    return data
}
