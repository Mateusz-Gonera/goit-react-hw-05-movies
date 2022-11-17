import { useSearchParams } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useSearch } from 'utils/hooks/useSearch';
import styles from './MoviesPage.module.css';
import { Loader } from 'components/Loader/Loader';
import { Searchbar } from 'components/Searchbar/Searchbar';

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
      <Searchbar handleSubmit={handleSubmit} />
      <Suspense fallback={<Loader />}>
        <SearchMovieList movies={movies} />
      </Suspense>
    </div>
  );
};

export default MoviesPage;
