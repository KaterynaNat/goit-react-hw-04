import { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast'; // Доданий імпорт.
import styles from './SearchBar.module.css';

function SearchBar({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleChange = e => setValue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (!value.trim()) {
      toast.error('Please enter a search query.');
      return;
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search images and photos"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Search</button>
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
