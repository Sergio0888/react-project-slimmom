import UserRoutes from '../routes/routes';
import { isSid } from 'redux/auth/authSelectors';
import { refresh } from 'redux/auth/authOperations';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const App = () => {
  const sid = useSelector(isSid);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh({ sid }));

    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <>
      <UserRoutes />
    </>
  );
};