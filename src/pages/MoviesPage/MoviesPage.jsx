import { useSearchParams } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useSearch } from 'utils/hooks/useSearch';
import styles from './MoviesPage.module.css';
import { Loader } from 'components/Loader/Loader';

const SearchMovieList = lazy(() =>
  import('components/SearchMovieList/SearchMovieList')
);

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const { movies } = useSearch(query);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.movieName.value.toLowerCase() });
    form.reset();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input className={styles.input} type="text" name="movieName" />
        <button type="submit" className={styles.submit}>
          Search
        </button>
      </form>
      <Suspense fallback={<Loader />}>
        <SearchMovieList movies={movies} />
      </Suspense>
    </div>
  );
};

export default MoviesPage;
