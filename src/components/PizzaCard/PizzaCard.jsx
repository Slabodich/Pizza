import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames/bind';

import { addItem } from '../Redux/slices/cartSlice';
import styles from './PizzaCard.module.scss';
import AddIcon from '../../accets/img/addIcon.svg';

const cx = cn.bind(styles);

function PizzaCard({ id, imageUrl, title, types, sizes, price }) {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id),
  );

  const addedCount = cartItem ? cartItem.count : 0;
  const typePizza = ['тонкое', 'традиционное'];

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      sizes: sizes[activeSize],
      type: typePizza[activeType],
    };
    dispatch(addItem(item));
  };

  return (
    <div className={styles.pizzaBlock}>
      <img className={styles.image} src={imageUrl} alt="Pizza" />
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.PizzaSelector}>
        <ul>
          {types.map((type, i) => (
            <li
              key={type}
              onClick={() => setActiveType(i)}
              className={cx({ active: activeType === i })}
            >
              {typePizza[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li
              key={size}
              onClick={() => setActiveSize(i)}
              className={cx({ active: activeSize === i })}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.bottom}>
        <div className={styles.price}>от {price} ₽</div>
        <button onClick={onClickAdd} type="button" className={styles.buttonAdd}>
          <img src={AddIcon} alt="add" />
          <span>Добавить</span>
          {addedCount > 0 && <i>{addedCount}</i>}
        </button>
      </div>
    </div>
  );
}

export default PizzaCard;
