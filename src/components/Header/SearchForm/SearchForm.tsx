import React, { useContext, useState } from 'react';
import styles from './SearchForm.module.scss';
import { SearchContext } from '../../../App';

export const SearchForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  // const { search, setSearch } = useContext(SearchContext);
    const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="search"
          placeholder="Search pokemon..."
        />
        <button type="submit"></button>
      </form>
    </div>
  );
};
