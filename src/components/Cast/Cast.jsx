import { useParams } from 'react-router-dom';
import { useCast } from 'utils/hooks/useCast';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const { cast } = useCast(movieId);

  if (!cast) return <Loader />;

  return (
    <div>
      <ul>
        {cast.map(actor => {
          return (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={`${actor.name}`}
                width="90"
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
