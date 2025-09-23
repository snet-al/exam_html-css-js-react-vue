let photos = [];
let isGrayscale = false;
let isLoading = false;

const photoGrid = document.getElementById('photo-gallery');
const grayscaleToggle = document.getElementById('toggle-switch');
const fetchNewBtn = document.getElementById('fetch-photos');
const loadMoreBtn = document.getElementById('fetch-more-photos');

function setLoading(loading) {
    isLoading = loading;
    if (fetchNewBtn) fetchNewBtn.disabled = loading;
    if (loadMoreBtn) loadMoreBtn.disabled = loading;
    
    if (loading && fetchNewBtn) {
        fetchNewBtn.innerHTML = '<span class="spinner"></span>Loading...';
    } else if (fetchNewBtn) {
        fetchNewBtn.innerHTML = 'Fetch New Photos';
    }
    
    if (loading && loadMoreBtn) {
        loadMoreBtn.innerHTML = '<span class="spinner"></span>Loading More...';
    } else if (loadMoreBtn) {
        loadMoreBtn.innerHTML = 'More Photos';
    }
}

function createPhotoCard(photo) {
    return `
        <div class="photo-card">
            <img 
                src="${photo.download_url}" 
                alt="Photo by ${photo.author}"
                class="photo-img ${isGrayscale ? 'grayscale' : ''}"
                loading="lazy"
            >
            <div class="photo-info">
                <h3>Photo by ${photo.author}</h3>
                <p>ID: ${photo.id}</p>
                <p>${photo.width} × ${photo.height}</p>
            </div>
        </div>
    `;
}

function renderPhotos() {
    if (!photoGrid) return;
    
    if (photos.length === 0 && !isLoading) {
        photoGrid.innerHTML = '<div class="loading">No photos loaded. Click "Fetch New Photos" to start!</div>';
        return;
    }
    
    let photoCardsMarkup = '';
    photos.forEach(photo => {
        photoCardsMarkup += createPhotoCard(photo);
    });
    
    photoGrid.innerHTML = photoCardsMarkup;
}

function updateGrayscaleMode() {
    const photoImages = document.querySelectorAll('.photo-card img');
    photoImages.forEach(img => {
        if (isGrayscale) {
            img.classList.add('grayscale');
        } else {
            img.classList.remove('grayscale');
        }
    });
}


async function fetchNewPhotos() {
    await fetchPhotosFromAPI(4, false);
}

async function appendMorePhotos() {
    await fetchPhotosFromAPI(4, true);
}

async function fetchPhotosFromAPI(photosPerPage = 4, shouldAppend = false) {
    console.log('Fetching photos:', { photosPerPage, shouldAppend });
    setLoading(true);
    
    try {
        const page = Math.floor(Math.random() * 10) + 1;
        const apiUrl = `https://picsum.photos/v2/list?page=${page}&limit=${photosPerPage}`;
        console.log('API URL:', apiUrl);
        
        const response = await fetch(apiUrl);
        console.log('Response status:', response.status);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const newPhotos = await response.json();
        console.log('Fetched photos:', newPhotos.length);
        
        const photosWithUrls = newPhotos.map(photo => ({
            ...photo,
            download_url: `https://picsum.photos/id/${photo.id}/400/600`
        }));
        
        photos = shouldAppend 
            ? [...photos, ...photosWithUrls.filter(photo => !photos.some(p => p.id === photo.id))]
            : photosWithUrls;
        
        console.log('Total photos now:', photos.length);
        renderPhotos();
        
    } catch (error) {
        console.error('Error fetching photos:', error);
        
        if (photoGrid) {
            photoGrid.innerHTML = `
                <div class="loading" style="grid-column: 1 / -1; text-align: center;">
                    <h3>Failed to load photos</h3>
                    <p>Error: ${error.message}</p>
                    <p>Please check your internet connection and try again.</p>
                    <br>
                    <button class="fetch-button" onclick="fetchNewPhotos()">Retry</button>
                </div>
            `;
        }
    } finally {
        setLoading(false);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    
    if (grayscaleToggle) {
        grayscaleToggle.addEventListener('change', () => {
            isGrayscale = grayscaleToggle.checked;
            updateGrayscaleMode();
        });
    }

    
    if (fetchNewBtn) {
        fetchNewBtn.addEventListener('click', fetchNewPhotos);
    }

    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', appendMorePhotos);
    }

    
    fetchNewPhotos();
});


document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG' && e.target.classList.contains('photo-img')) {
        e.target.src = 'https://via.placeholder.com/400x600/e5e7eb/6b7280?text=Image+Not+Found';
        e.target.alt = 'Image not found';
    }
}, true);
