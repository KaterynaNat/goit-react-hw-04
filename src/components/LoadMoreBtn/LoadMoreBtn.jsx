import PropTypes from 'prop-types';
import styles from './LoadMoreBtn.module.css';

function LoadMoreBtn({ onClick }) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      Load more
    </button>
  );
}

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;