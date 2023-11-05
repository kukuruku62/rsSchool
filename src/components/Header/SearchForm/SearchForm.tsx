import React, { useContext, useState } from 'react';
import styles from './SearchForm.module.scss';
import { SearchContext } from '../../../App';

export const SearchForm = () => {

  const { setSearchValue } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchValue(inputValue)
  };

  return (
    <div> 
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="search"
          placeholder="Search by full name..."
        />
        <button type="submit"></button>
      </form>
    </div>
  );
};
