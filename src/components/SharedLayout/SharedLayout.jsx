import {
  fetchTrend,
  fetchSearch,
  fetchDetails,
  fetchCredits,
} from 'utils/api/fetchMovies';

export const SharedLayout = () => {
  fetchCredits('414906').then(res => {
    const foo = res;
    console.log(foo);
  });
  return (
    <div>
      <span>example</span>
    </div>
  );
};
