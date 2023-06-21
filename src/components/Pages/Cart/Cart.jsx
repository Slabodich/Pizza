import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Cart.module.scss';
import { clearItems } from '../../Redux/slices/cartSlice';
import { ReactComponent as CartIcon } from '../../../accets/img/cart.svg';
import { ReactComponent as ClearIcon } from '../../../accets/img/clear.svg';
import { ReactComponent as BackIcon } from '../../../accets/img/back.svg';
import { Link } from 'react-router-dom';
import CartItem from '../../CartItem/CartItem';
import CartEmpty from '../../CartEmpty/CartEmpty';

function Cart() {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const onClickClear = () => {
    dispatch(clearItems());
  };
  if (!totalPrice) {
    return <CartEmpty />;
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cart}>
          <div className={styles.top}>
            <h2 className={styles.title}>
              <CartIcon />
              Корзина
            </h2>
            <div onClick={onClickClear} className={styles.clear}>
              <ClearIcon />
              <span>Очистить корзину</span>
            </div>
          </div>
          <div className={styles.items}>
            {items.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <div className={styles.bottom}>
            <div className={styles.details}>
              <span>
                Всего пицц: <b>{totalCount} шт.</b>{' '}
              </span>
              <span>
                Сумма заказа: <b>{totalPrice} ₽</b>{' '}
              </span>
            </div>
            <div className={styles.buttons}>
              <Link to="/Pizza" className={styles.goBackBtn}>
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

export default Cart;
