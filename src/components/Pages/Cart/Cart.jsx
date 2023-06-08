import React from 'react';
import styles from './Cart.module.scss';

import { ReactComponent as Plus } from '../../../accets/img/plus.svg';
import { ReactComponent as Minus } from '../../../accets/img/minus.svg';
import { ReactComponent as Remove } from '../../../accets/img/remove.svg';
import { ReactComponent as CartIcon } from '../../../accets/img/cart.svg';
import { ReactComponent as ClearIcon } from '../../../accets/img/clear.svg';
import { ReactComponent as BackIcon } from '../../../accets/img/back.svg';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cart}>
          <div className={styles.top}>
            <h2 className={styles.title}>
              <CartIcon />
              Корзина
            </h2>
            <div className={styles.clear}>
              <ClearIcon />
              <span>Очистить корзину</span>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.wrapImg}>
                <img
                  className={styles.image}
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
              </div>
              <div className={styles.info}>
                <h3>Сырный цыпленок</h3>
                <p>тонкое тесто, 26 см.</p>
              </div>
              <div className={styles.wrapCount}>
                <div className={styles.count}>
                  <div className={styles.minus}>
                    <Minus />
                  </div>
                  <b>2</b>
                  <div className={styles.plus}>
                    <Plus />
                  </div>
                </div>
                <div className={styles.price}>
                  <b>770 ₽</b>
                </div>
              </div>
              <div className={styles.remove}>
                <div className={styles.btnRemove}>
                  <Remove />
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.wrapImg}>
                <img
                  className={styles.image}
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
              </div>
              <div className={styles.info}>
                <h3>Сырный цыпленок</h3>
                <p>тонкое тесто, 26 см.</p>
              </div>
              <div className={styles.wrapCount}>
                <div className={styles.count}>
                  <div className={styles.minus}>
                    <Minus />
                  </div>
                  <b>2</b>
                  <div className={styles.plus}>
                    <Plus />
                  </div>
                </div>
                <div className={styles.price}>
                  <b>770 ₽</b>
                </div>
              </div>
              <div className={styles.remove}>
                <div className={styles.btnRemove}>
                  <Remove />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.details}>
              <span>
                Всего пицц: <b>3 шт.</b>{' '}
              </span>
              <span>
                Сумма заказа: <b>900 ₽</b>{' '}
              </span>
            </div>
            <div className={styles.buttons}>
              <Link to="/" className={styles.goBackBtn}>
                <BackIcon />
                <span>Вернуться назад</span>
              </Link>
              <div className={styles.payBtn}>
                <span>Оформить заказ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Cart.propTypes = {};

export default Cart;
