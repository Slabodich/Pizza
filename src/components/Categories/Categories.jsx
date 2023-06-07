import React, { useState } from 'react';
import styles from './Categories.module.scss';
import cnBind from 'classnames/bind';

const categories = [
  {
    _id: 1,
    name: 'Все',
  },
  {
    _id: 2,
    name: 'Мясные',
  },
  {
    _id: 3,
    name: 'Вегетарианская',
  },
  {
    _id: 4,
    name: 'Гриль',
  },
  {
    _id: 5,
    name: 'Острые',
  },
  {
    _id: 6,
    name: 'Закрытые',
  },
];
const cx = cnBind.bind(styles);

function Categories() {
  const [activeCategorie, setActiveCategorie] = useState(1);
  return (
    <nav className={styles.categories}>
      <ul className={styles.conteiner}>
        {categories.map((item) => (
          <li
            key={item._id}
            onClick={() => setActiveCategorie(item._id)}
            className={cx('categorie', {
              active: activeCategorie === item._id,
            })}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Categories;
