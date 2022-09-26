import s from './Header.module.scss';

import { useMediaPredicate } from 'react-media-hook';
import UserInfo from 'components/UserInfo/UserInfo';
import Navigation from 'components/Navigation/Navigation';
import Logo from 'components/Logo/Logo';

import { useSelector } from 'react-redux';
import { isLogin } from 'redux/auth/authSelectors';


const Header = () => {
  const biggerThan1280 = useMediaPredicate('(min-width: 1280px)');
  const isLogged = useSelector(isLogin);

  return (
    <>
      <header className={s.header}>
        <div className="container">
          <div className={s.box}>
            <Logo />
            <Navigation />
           {biggerThan1280 && isLogged && <UserInfo />}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
