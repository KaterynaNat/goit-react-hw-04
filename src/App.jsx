import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { fetchImages } from './components/api';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) return;
    const getImages = async () => {
      setIsLoading(true);
      try {
        const data = await fetchImages(query, page);
        if (data.results.length === 0) {
          toast.error('No images found');
          return;
        }
        setImages(prev => [...prev, ...data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [query, page]);

  const handleSearch = newQuery => {
    if (query === newQuery) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => setPage(prevPage => prevPage + 1);

  const openModal = image => setModalImage(image);
  const closeModal = () => setModalImage(null);

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      {error && <p>Error: {error.message}</p>}
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      {modalImage && <ImageModal image={modalImage} onClose={closeModal} />}
    </div>
  );
}

export default App;