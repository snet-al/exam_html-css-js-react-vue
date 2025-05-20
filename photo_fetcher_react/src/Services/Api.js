export const fetchPhotos = async (numberOfImages, setImages, setLoading) => {
    setLoading(true);

    setImages(Array.from({ length: numberOfImages }, () => ({ img_loading: true })));

    try {
        const response = await fetch(
            `https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 100) + 1}&limit=${numberOfImages}`
        );
        if (!response.ok) throw new Error(`Error Status: ${response.status}`);

        const photos = await response.json();

        setImages(photos);

    } catch (error) {
        console.error("Error fetching photos:", error);
    } finally {
        setLoading(false);
    }
};

export const fetchMorePhotos = async (numberOfImages, setImages, setLoading) => {
    setLoading(true);

    setImages(prevImages => [...prevImages, ...Array.from({ length: numberOfImages }, () => ({ img_loading: true }))]);

    try {
        const response = await fetch(
            `https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 100) + 1}&limit=${numberOfImages}`
        );
        if (!response.ok) throw new Error(`Error Status: ${response.status}`);

        const photos = await response.json();

        setImages(prevImages => [...prevImages.slice(0, (-1 * numberOfImages)), ...photos]);

    } catch (error) {
        console.error("Error fetching photos:", error);
    } finally {
        setLoading(false);
    }
};