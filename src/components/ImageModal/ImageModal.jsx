import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styles from './ImageModal.module.css';

ReactModal.setAppElement('#root'); 

function ImageModal({ image, onClose }) {
  const { url, author, likes, description } = image;

  return (
    <ReactModal
      isOpen={!!image}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button onClick={onClose} className={styles.closeButton}>Close</button>
      <img src={url} alt={description} className={styles.image} />
      <div className={styles.info}>
        <h3>{author}</h3>
        <p>Likes: {likes}</p>
        <p>{description}</p>
      </div>
    </ReactModal>
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