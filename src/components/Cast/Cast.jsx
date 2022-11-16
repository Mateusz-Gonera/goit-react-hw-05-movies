import { useParams } from 'react-router-dom';
import { useCast } from 'utils/hooks/useCast';

const Cast = () => {
  const { movieId } = useParams();
  const { cast } = useCast(movieId);

  return (
    <div>
      <ul>
        {cast.map(actor => {
          return (
            <li>
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt="actor"
              />
              <span>{actor.name}</span>
              <span>Character: {actor.character}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
