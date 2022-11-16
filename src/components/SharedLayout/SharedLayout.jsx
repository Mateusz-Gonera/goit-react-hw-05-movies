import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import { fetchDetails } from 'utils/api/fetchMovies';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  fetchDetails('414906').then(res => {
    const foo = res;
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
