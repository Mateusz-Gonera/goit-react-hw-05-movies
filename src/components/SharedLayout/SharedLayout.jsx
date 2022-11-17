import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import { Loader } from 'components/Loader/Loader';
import styled from 'styled-components';
import { fetchReviews } from 'utils/api/fetchMovies';

const CustomLink = styled(NavLink)`
  &.active {
    color: rgb(255, 81, 0);
  }
`;

export const SharedLayout = () => {
  fetchReviews('817758').then(res => {
    const foo = res.results;
    console.log(foo);
  });
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <CustomLink className={styles.link} to="/" end>
          Home
        </CustomLink>
        <CustomLink className={styles.link} to="/movies">
          Movies
        </CustomLink>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
