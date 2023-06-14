import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import logo from '../../accets/img/logo.png';
import cart from '../../accets/img/cart.svg';
import { useSelector } from 'react-redux';

function Header() {
  const { totalPrice, items } = useSelector((state) => state.cart);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={styles.cart}>
          <Link to="/cart" className={styles.buttonCart}>
            <span className={styles.price}>{totalPrice} ₽</span>
            <img className={styles.cartIcon} src={cart} alt="cart" />
            <span>{items.length}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
