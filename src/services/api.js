const BASE_URL = "https://picsum.photos"

export const loadPhoto = async (id) => {
    const response = await fetch (`${BASE_URL}/id/${id}/info`)
    const data = await response.json()
    return data
}
