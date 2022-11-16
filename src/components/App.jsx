import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('components/Cast/Cast'));

export const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-05-movies" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path=":movieId" element={<MovieDetailsPage />}></Route>
        <Route path="movies" element={<MoviesPage />}></Route>
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
        </Route>
      </Route>
    </Routes>
  );
};
