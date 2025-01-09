import PropTypes from 'prop-types';
import styles from './ImageCard.module.css';

function ImageCard({ image, onClick }) {
  return (
    <div className={styles.card}>
      <img 
        src={image.urls.small} 
        alt={image.alt_description} 
        className={styles.image} 
        onClick={onClick} 
      />
    </div>
  );
}

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;