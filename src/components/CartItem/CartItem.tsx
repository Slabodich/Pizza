import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  plusCount,
  minusCount,
  removeItem,
  CartItem as CartItemType,
} from '../Redux/slices/cartSlice';
import styles from './CartItem.module.scss';
import { ReactComponent as PlusIcon } from '../../accets/img/plus.svg';
import { ReactComponent as MinusIcon } from '../../accets/img/minus.svg';
import { ReactComponent as RemoveIcon } from '../../accets/img/remove.svg';

interface CartItemProps {
  unic: string;
  title: string;
  imageUrl: string;
  price: number;
  count: number;
  size: number;
  type: string;
}

const CartItem: React.FC<CartItemProps> = ({
  unic,
  title,
  imageUrl,
  price,
  count,
  size,
  type,
}) => {
  const dispatch = useDispatch();

  const onClickPlus = useCallback(() => {
    dispatch(plusCount({ unic } as CartItemType));
  }, [dispatch, unic]);

  const onClickMinus = useCallback(() => {
    if (count < 2) {
      dispatch(removeItem(unic));
    } else {
      dispatch(minusCount({ unic } as CartItemType));
    }
  }, [count, dispatch, unic]);

  const onClickRemoveItem = useCallback(() => {
    dispatch(removeItem(unic));
  }, [dispatch, unic]);

  return (
    <div className={styles.item}>
      <div className={styles.wrapImg}>
        <img className={styles.image} src={imageUrl} alt="Pizza" />
      </div>
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>
          {type}, {size} см.
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
};

export default CartItem;
