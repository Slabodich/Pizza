import React, { useState, useEffect } from 'react';
import Categories from '../../Categories/Categories';
import Sort from '../../Sort/Sort';
import PizzaCard from '../../PizzaCard/PizzaCard';
import styles from './Home.module.scss';
import axios from 'axios';
import Sceleton from '../../PizzaCard/Sceleton';

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://6480cec9f061e6ec4d49e650.mockapi.io/items',
      );
      setItems(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.categories}>
          <Categories />
        </div>
        <div className={styles.sort}>
          <Sort />
        </div>
        <h2 className={styles.title}>Все пиццы</h2>
        <div className={styles.items}>
          {isLoading
            ? [...new Array(6)].map((_, i) => <Sceleton key={i} />)
            : items.map((item) => <PizzaCard key={item.id} {...item} />)}
        </div>
      </div>
    </div>
  );
}

export default Home;
