import React from 'react';
import styles from './Navbar.module.css'
import Logo from '../images/logo.jpg'
const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.lisContainer}>
            <ul className={styles.list}>
                <li>Home</li>
                <li>Product</li>
                <li>AboutUs</li>
                <li>Blogs</li>
            </ul>
            </div>
            <div className={styles.logo}>
                <img className={styles.logo} src={Logo} alt='logo'></img>
            </div>
        </header>
    );
};

export default Navbar;