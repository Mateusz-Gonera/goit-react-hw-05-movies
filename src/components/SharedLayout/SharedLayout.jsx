import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import { fetchSearch } from 'utils/api/fetchMovies';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  fetchSearch('batman').then(res => {
    const foo = res.results;
    console.log(foo);
  });
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavLink className={styles.link}>Home</NavLink>
        <NavLink className={styles.link}>Movies</NavLink>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
