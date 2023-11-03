import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/pokemon-logo-header.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.container}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <div>
        <form>
          {/* <label htmlFor=""></label> */}
          <input type="search" placeholder="Search pokemon..." />
          <button type='submit'></button>
        </form>
      </div>
    </header>
  );
};
