import React from 'react';

import styles from './CartEmpty.module.scss';

function CartEmpty() {
  return (
    <div className={styles.cartEmpty}>
      <h2>
        Корзина пустая <icon>😕</icon>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src="/img/empty-cart.png" alt="Empty cart" />
      <a href="/" className={styles.button}>
        <span>Вернуться назад</span>
      </a>
    </div>
  );
}

export default CartEmpty;
