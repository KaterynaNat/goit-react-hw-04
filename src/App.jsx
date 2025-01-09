import { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { fetchImages } from './components/api';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      setIsLoading(true);
      try {
        const data = await fetchImages(query, page);
        setImages((prev) => [...prev, ...data]);
        if (data.length === 0) {
          toast.error('No images found. Try a different search query.');
        }
      } catch (err) {
        setError(err.message);
        toast.error('Failed to fetch images. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (newQuery.trim() === '') {
      toast.error('Please enter a valid search query.');
      return;
    }

    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleImageClick = (image) => {
    setSelectedImage({
      url: image.urls.regular,
      author: image.user.name,
      likes: image.likes,
      description: image.description || image.alt_description,
    });
  };

  const handleCloseModal = () => setSelectedImage(null);

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <SearchBar onSubmit={handleSearch} />
      {error && <p>Error: {error}</p>}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />}
      {selectedImage && <ImageModal image={selectedImage} onClose={handleCloseModal} />}
    </div>
  );
}

export default App;