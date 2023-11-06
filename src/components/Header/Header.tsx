import React, { useContext, useState } from 'react';
import styles from './Header.module.scss';
import Logo from '../../assets/icons8-marvel-logo.svg';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../App';
import { SearchForm } from './SearchForm/SearchForm';


export const Header = () => {

  return (
    <header className={styles.container}>
      <Link to="/">
        <img src={Logo} alt="Logotype" />
      </Link>
      <SearchForm />
    </header>
  );
};
