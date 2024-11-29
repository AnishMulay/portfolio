import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AppBar.module.css';

const AppBar = () => {
  return (
    <nav className={styles.appBar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about" className={styles.navLink}>About Me</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contact" className={styles.navLink}>Contact</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/work-experience" className={styles.navLink}>Work Experience</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/projects" className={styles.navLink}>Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AppBar;