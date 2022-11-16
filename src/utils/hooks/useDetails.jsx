import { fetchDetails } from 'utils/api/fetchMovies';
import { useState, useEffect } from 'react';

export const useDetails = movieId => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchDetails(movieId).then(res => {
      setMovie({ ...res });
    });
  }, [movieId]);

  return { movie };
};
