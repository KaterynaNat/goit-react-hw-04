import PropTypes from 'prop-types';
import styles from './ImageModal.module.css';

function ImageModal({ image, onClose }) {
  const { url, author, likes, description } = image;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>Close</button>
        <img src={url} alt={description} className={styles.image} />
        <div className={styles.info}>
          <h3>{author}</h3>
          <p>Likes: {likes}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

ImageModal.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    description: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;
