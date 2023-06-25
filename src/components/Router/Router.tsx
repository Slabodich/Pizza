import { Routes, BrowserRouter, Route } from 'react-router-dom';

import styles from './Router.module.scss';

import Header from '../Header/Header';
import Home from '../Pages/Home/Home';
import Cart from '../Pages/Cart/Cart';

function Router() {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.main}>
          <Routes>
            <Route element={<Home />} path="/Pizza" />
            <Route element={<Cart />} path="/cart" />
            <Route element={<div>Страница не найдена</div>} path="*" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Router;
