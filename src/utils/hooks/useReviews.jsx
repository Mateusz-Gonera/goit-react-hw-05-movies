import { useEffect, useState } from 'react';
import { fetchReviews } from 'utils/api/fetchMovies';

export const useReviews = movieId => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId).then(res => {
      setReviews([...res.results]);
    });
  }, [movieId]);

  return { reviews };
};
