import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import { fetchTrend } from 'utils/api/fetchMovies';

export const SharedLayout = () => {
  fetchTrend().then(res => {
    const foo = res.results;
    console.log(foo);
  });
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavLink className={styles.link}>Home</NavLink>
        <NavLink className={styles.link}>Movies</NavLink>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
