import { useTrend } from 'utils/hooks/useTrend';
import styles from './HomePage.module.css';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const { trendList } = useTrend();

  return (
    <main>
      <h1 className={styles.headOne}>Trending today</h1>
      <ul>
        {trendList.map(movie => {
          return (
            <li key={movie.id} className={styles.item}>
              <NavLink to={`${movie.id}`}>
                <span>{movie.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default HomePage;
