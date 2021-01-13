import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { userContext } from '../../userContext';

import { ReactComponent as Cats } from '../../Assets/cat.svg';

const Header = () => {
  const context = React.useContext(userContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Cats - Home">
          <Cats />
        </Link>
        <Link className={styles.login} to="/login">
          Log in | Sign up
        </Link>
      </nav>
    </header>
  );
};

export default Header;
