import PropTypes from 'prop-types';
import styles from './ImageCard.module.css';

function ImageCard({ image, onClick }) {
  const { urls, alt_description } = image;

  return (
    <div className={styles.card} onClick={() => onClick(image)}>
      <img src={urls.small} alt={alt_description} className={styles.image} />
    </div>
  );
}

ImageCard.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;