import { useState } from 'react';
import css from './searchForm.module.css';

export const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const changeQuery = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault(0);

    if (!query) {
      alert('Please fill in the input!');
    }
    onSearch(query);
    setQuery('');
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.SearchFormInput}
          type="text"
          placeholder="Search movies"
          name="query"
          value={query}
          onChange={changeQuery}
        />
        <button className={css.SearchFormButton} type="submit"></button>
      </form>
    </>
  );
};
