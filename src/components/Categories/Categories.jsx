import React from 'react';
import styles from './Categories.module.scss';
import cnBind from 'classnames/bind';

function Categories({ activeCategorie, setActiveCategorie }) {
  const categories = [
    {
      _id: 0,
      name: 'Все',
    },
    {
      _id: 1,
      name: 'Мясные',
    },
    {
      _id: 2,
      name: 'Вегетарианская',
    },
    {
      _id: 3,
      name: 'Гриль',
    },
    {
      _id: 4,
      name: 'Острые',
    },
    {
      _id: 5,
      name: 'Закрытые',
    },
  ];
  const cx = cnBind.bind(styles);

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
