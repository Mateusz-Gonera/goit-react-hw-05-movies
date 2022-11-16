import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchMovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
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
