import PropTypes from 'prop-types';
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <li key={image.id} className={styles.item}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;