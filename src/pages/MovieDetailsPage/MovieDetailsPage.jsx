import { NavLink, useParams } from 'react-router-dom';
import { useDetails } from 'utils/hooks/useDetails';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const { movie } = useDetails(id);

  return (
    <div>
      <NavLink className={styles.link}>← Go back</NavLink>
      <div className={styles.container}>
        <img />
        <div className={styles.information}>
          <h2 className={styles.title}>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <p className={styles.paragraph}>
            User Score: {Number.parseFloat(movie.vote_average * 10).toFixed(0)}
          </p>
          <h3 className={styles.overview}>Overview</h3>
          <p className={styles.paragraph}>{movie.overview}</p>
          <h4 className={styles.genres}>Genres</h4>
          <p className={styles.paragraph}>
            {movie.genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
