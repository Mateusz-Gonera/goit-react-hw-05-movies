import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-05-movies" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
