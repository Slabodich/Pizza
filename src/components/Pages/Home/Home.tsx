import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import Categories from '../../Categories/Categories';
import Sort from '../../Sort/Sort';
import PizzaCard from '../../PizzaCard/PizzaCard';
import styles from './Home.module.scss';
import Sceleton from '../../PizzaCard/Sceleton';
import {
  SortItem,
  setActiveCategorie,
  setSort,
} from '../../Redux/slices/filterSlice';
import { PizzaItem, fetchPizzas } from '../../Redux/slices/pizzasSlice';
import { RootState, useAppDispatch } from '../../Redux/store';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { activeCategorie, sort } = useSelector(
    (state: RootState) => state.filter,
  );
  const { items, status } = useSelector((state: RootState) => state.pizzas);

  useEffect(() => {
    const fetchData = () => {
      const sortBy = sort.sortProperty.replace('-', '');
      const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
      const category = activeCategorie > 0 ? String(activeCategorie) : '';

      dispatch(fetchPizzas({ category, sortBy, order }));
      window.scrollTo(0, 0);
    };

    fetchData();
  }, [activeCategorie, sort, dispatch]);

  const handleSetActiveCategorie = (i: number) => {
    dispatch(setActiveCategorie(i));
  };

  const handleSetSort = (i: SortItem) => {
    dispatch(setSort(i));
  };

  const sceleton = [...new Array(6)].map((_, i) => <Sceleton key={i} />);
  const pizzas = items.map((item: PizzaItem) => (
    <PizzaCard key={item.id} {...item} />
  ));

  return (
    <>
      <div className={styles.filtersWrapper}>
        <div className={styles.categories}>
          <Categories
            activeCategorie={activeCategorie}
            setActiveCategorie={handleSetActiveCategorie}
          />
        </div>
        <div className={styles.sort}>
          <Sort activeSort={sort} setActiveSort={handleSetSort} />
        </div>
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
};

export default Home;
