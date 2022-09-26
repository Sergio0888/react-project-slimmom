import s from './UserInfo.module.scss';

import { useSelector } from 'react-redux';

import { getUserName } from 'redux/auth/authSelectors';
import ExitButton from 'shared/components/ExitButton/ExitButton';


const UserInfo = () => {
  const user = useSelector(getUserName);

  return (
    <div className={s.box}>
      <p className={s.user}>{user}</p>
      <ExitButton/>
    </div>
  );
};

export default UserInfo;
