import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import PublicRoute from 'components/PublicRoute/PublicRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { Loader } from 'components/Loader/Loader';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const DiaryPage = lazy(() => import('pages/DiaryPage/DiaryPage'));

const CalculatorPage = lazy(() =>
  import('pages/CalculatorPage/CalculatorPage')
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
