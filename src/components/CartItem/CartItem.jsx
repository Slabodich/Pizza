import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { addItem, minusCount, removeItem } from '../Redux/slices/cartSlice';
import styles from './CartItem.module.scss';
import { ReactComponent as PlusIcon } from '../../accets/img/plus.svg';
import { ReactComponent as MinusIcon } from '../../accets/img/minus.svg';
import { ReactComponent as RemoveIcon } from '../../accets/img/remove.svg';

function CartItem({ id, title, imageUrl, price, count, sizes, type }) {
  const dispatch = useDispatch();

  const onClickPlus = useCallback(() => {
    dispatch(addItem({ id }));
  }, [dispatch, id]);

  const onClickMinus = useCallback(() => {
    if (count < 2) {
      dispatch(removeItem(id));
    } else {
      dispatch(minusCount({ id }));
    }
  }, [count, dispatch, id]);

  const onClickRemoveItem = useCallback(() => {
    dispatch(removeItem(id));
  }, [dispatch, id]);

  return (
    <div className={styles.item}>
      <div className={styles.wrapImg}>
        <img className={styles.image} src={imageUrl} alt="Pizza" />
      </div>
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>
          {type}, {sizes} см.
        </p>
      </div>
      <div className={styles.wrapCount}>
        <div className={styles.count}>
          <div onClick={onClickMinus} className={styles.minus}>
            <MinusIcon />
          </div>
          <b>{count}</b>
          <div onClick={onClickPlus} className={styles.plus}>
            <PlusIcon />
          </div>
        </div>
        <div className={styles.price}>
          <b>{price * count} ₽</b>
        </div>
      </div>
      <div className={styles.remove}>
        <button onClick={onClickRemoveItem} className={styles.btnRemove}>
          <RemoveIcon />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
