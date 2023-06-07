import React from 'react';
import Categories from '../../Categories/Categories';
import Sort from '../../Sort/Sort';
import PizzaCard from '../../PizzaCard/PizzaCard';
import styles from './Home.module.scss';
import pizzas from '../../../accets/pizzas.json';

function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Categories />
        {/* <Sort /> */}

        <h2 className={styles.title}>Все пиццы</h2>
        <div className={styles.items}>
          {pizzas.map((obj) => (
            <PizzaCard {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
