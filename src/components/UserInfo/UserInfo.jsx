import s from './UserInfo.module.scss';

import { useSelector } from 'react-redux';
import ExitButton from 'shared/components/ExitButton/ExitButton';

import { getUserName } from 'redux/auth/authSelectors';
import { isLogin } from 'redux/auth/authSelectors';

const UserInfo = () => {
  const user = useSelector(getUserName);
  const isLogged = useSelector(isLogin);

  return (
    <>
      {isLogged && (
        <div className={s.box}>
          <p className={s.user}>{user}</p>
          <ExitButton />
        </div>
      )}
    </>
  );
};

export default UserInfo;
