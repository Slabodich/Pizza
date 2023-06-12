import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import Categories from '../../Categories/Categories';
import Sort from '../../Sort/Sort';
import PizzaCard from '../../PizzaCard/PizzaCard';
import styles from './Home.module.scss';
import Sceleton from '../../PizzaCard/Sceleton';
import { setActiveCategorie, setSort } from '../../Redux/slices/filterSlice';

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const sortBy = filter.sort.sortProperty.replace('-', '');
      const order = filter.sort.sortProperty.includes('-') ? 'asc' : 'desc';
      const category =
        filter.activeCategorie > 0 ? String(filter.activeCategorie) : '';

      const response = await axios.get(
        'https://6480cec9f061e6ec4d49e650.mockapi.io/items',
        {
          params: {
            category,
            sortBy,
            order,
          },
        },
      );
      setItems(response.data);
      setIsLoading(false);
    };
    fetchData();
    window.scrollTo(0, 0);
  }, [filter.activeCategorie, filter.sort]);

  return (
    <>
      <div className={styles.categories}>
        <Categories
          activeCategorie={filter.activeCategorie}
          setActiveCategorie={(i) => dispatch(setActiveCategorie(i))}
        />
      </div>
      <div className={styles.sort}>
        <Sort
          activeSort={filter.sort.name}
          setActiveSotr={(i) => dispatch(setSort(i))}
        />
      </div>
      <h2 className={styles.title}>Все пиццы</h2>
      <div className={styles.items}>
        {isLoading
          ? [...new Array(6)].map((_, i) => <Sceleton key={i} />)
          : items.map((item) => <PizzaCard key={item.id} {...item} />)}
      </div>
    </>
  );
}

export default Home;
