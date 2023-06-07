import React, { useState } from 'react';
import styles from './PizzaCard.module.scss';
import addIcon from '../../accets/img/addIcon.svg';
import cnBind from 'classnames/bind';

function PizzaCard({ imageUrl, title, types, sizes, price }) {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const typePizza = ['тонкое', 'традиционное'];

  const cx = cnBind.bind(styles);

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
        <div className={styles.buttonAdd}>
          <img src={addIcon} alt="add" />
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
}

export default PizzaCard;
