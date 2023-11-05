import React, { useContext, useState } from 'react';
import styles from './Header.module.scss';
import Logo from '../../assets/icons8-marvel-logo.svg';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../App';
import { SearchForm } from './SearchForm/SearchForm';


export const Header = () => {

  // const {search, setSearch} = useContext(SearchContext)
  // console.log(search)
  // const [inputValue, setInputValue] = useState('');
  // const [fetchData, setFetchData] = useState('');
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
  //   e.preventDefault();
    
  // }

  return (
    <header className={styles.container}>
      <Link to="/">
        <img src={Logo} alt="Logotype" />
      </Link>
      <SearchForm />
    </header>
  );
};
