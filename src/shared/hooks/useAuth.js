import { useSelector } from 'react-redux';
import { isLogin } from 'redux/auth/authSelectors';

const useAuth = () => {
  const result = useSelector(isLogin);
  return result;
};

export default useAuth;
