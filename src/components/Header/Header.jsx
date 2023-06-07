import React from 'react';
import styles from './Header.module.scss';
import logo from '../../accets/img/logo.png';
import cart from '../../accets/img/cart.svg';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
        <div className={styles.cart}>
          <a href="/cart.html" className={styles.buttonCart}>
            <span className={styles.price}>520 ₽</span>
            <img className={styles.cartIcon} src={cart} alt="cart" />
            <span>3</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
