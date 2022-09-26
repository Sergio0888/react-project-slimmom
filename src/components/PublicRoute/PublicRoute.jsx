import useAuth from 'shared/hooks/useAuth';
import { Navigate, Outlet } from 'react-router';

const PublicRoute = () => {
  const isUserLogin = useAuth();

  if (isUserLogin) {
    return <Navigate to="/diary" />;
  }
  return <Outlet />;
};

export default PublicRoute;
