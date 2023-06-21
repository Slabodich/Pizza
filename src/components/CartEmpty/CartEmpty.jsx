import React from 'react';
import EmptyCartImg from '../../accets/img/emptyCart.svg';

import styles from './CartEmpty.module.scss';
import { Link } from 'react-router-dom';

function CartEmpty() {
  return (
    <div className={styles.cartEmpty}>
      <h2>
        Корзина пустая <icon>😕</icon>
      </h2>
      <img src={EmptyCartImg} alt="Empty cart" />
      <Link to="/Pizza" className={styles.button}>
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
}

export default CartEmpty;
