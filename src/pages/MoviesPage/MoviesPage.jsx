import { Outlet, useSearchParams } from 'react-router-dom';
import { Suspense } from 'react';
import { useSearch } from 'utils/hooks/useSearch';
import styles from './HomePage.module.css';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const { movies } = useSearch(query);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.movieName.value });
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movieName" />
        <button type="submit" className={styles.submit}>
          Search
        </button>
      </form>
      <Outlet />
    </div>
  );
};

export default MoviesPage;
