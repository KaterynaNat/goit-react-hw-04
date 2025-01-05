import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

function ImageModal({ image, onClose }) {
  const { urls, alt_description } = image;

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button onClick={onClose} className={styles.closeButton}>Close</button>
      <img src={urls.regular} alt={alt_description} className={styles.image} />
    </Modal>
  );
}

ImageModal.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;
