import {
  fetchTrend,
  fetchSearch,
  fetchDetails,
  fetchCredits,
  fetchReviews,
} from 'utils/api/fetchMovies';

export const SharedLayout = () => {
  fetchDetails('414906').then(res => {
    const foo = res;
    console.log(foo);
  });
  return (
    <div>
      <span>example</span>
    </div>
  );
};
