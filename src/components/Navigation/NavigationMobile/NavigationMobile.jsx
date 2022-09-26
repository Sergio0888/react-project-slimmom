import UserInfo from 'components/UserInfo/UserInfo';

import s from './NavigationMobile.module.scss';
import { isLogin } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const NavigationMobile = () => {

  const isLoginTrue = useSelector(isLogin)
  return (
    <>
      {isLoginTrue && (
        <div className={s.wrapper}>
          <div className={s.box}>
            {isLoginTrue && <UserInfo />}
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationMobile;
