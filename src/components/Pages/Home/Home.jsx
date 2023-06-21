import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Categories from '../../Categories/Categories';
import Sort from '../../Sort/Sort';
import PizzaCard from '../../PizzaCard/PizzaCard';
import styles from './Home.module.scss';
import Sceleton from '../../PizzaCard/Sceleton';
import { setActiveCategorie, setSort } from '../../Redux/slices/filterSlice';
import { fetchPizzas } from '../../Redux/slices/pizzasSlice';

function Home() {
  const dispatch = useDispatch();
  const { activeCategorie, sort } = useSelector((state) => state.filter);
  const { items, status } = useSelector((state) => state.pizzas);

  const fetchData = () => {
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = activeCategorie > 0 ? String(activeCategorie) : '';

    dispatch(fetchPizzas({ category, sortBy, order }));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchData();
  }, [activeCategorie, sort]);

  const handleSetActiveCategorie = (i) => {
    dispatch(setActiveCategorie(i));
  };

  const handleSetSort = (i) => {
    dispatch(setSort(i));
  };

  const sceleton = [...new Array(6)].map((_, i) => <Sceleton key={i} />);
  const pizzas = items.map((item) => <PizzaCard key={item.id} {...item} />);
  return (
    <>
      <div className={styles.categories}>
        <Categories
          activeCategorie={activeCategorie}
          setActiveCategorie={handleSetActiveCategorie}
        />
      </div>
      <div className={styles.sort}>
        <Sort activeSort={sort.name} setActiveSotr={handleSetSort} />
      </div>
      <h2 className={styles.title}>Все пиццы</h2>
      <div className={styles.items}>
        {status === 'error' ? (
          <div>
            {' '}
            Ошибка получения данных, попробуйте повторить попытку позже.
          </div>
        ) : status === 'loading' ? (
          sceleton
        ) : (
          pizzas
        )}
      </div>
    </>
  );
}

export default Home;
