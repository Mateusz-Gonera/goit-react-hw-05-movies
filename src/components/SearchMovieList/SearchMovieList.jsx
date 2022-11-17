import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const SearchMovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

SearchMovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default SearchMovieList;
