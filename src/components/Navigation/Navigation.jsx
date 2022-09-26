import { useSelector } from 'react-redux';
import { useMediaPredicate } from 'react-media-hook';
import { useState } from 'react';

import NavigationAuth from './NavigationAuth/NavigationAuth';
import { isLogin } from 'redux/auth/authSelectors';

import NavigationDairyCalculator from './NavigationDairyCalculator/NavigationDairyCalculator';

import BurgerMenu from 'shared/components/BurgerMenu/BurgerMenu';

import s from './Navigation.module.scss';
import NavigationMobile from './NavigationMobile/NavigationMobile';
import BurgerNav from './BurgerNav/BurgerNav';


const Navigation = () => {
  const [modalMenu, setModalMenu] = useState(false);

  const onClick = () => {
    setModalMenu(prev => !prev);
  };

  const isUserLogin = useSelector(isLogin);

  const smallerThan1280 = useMediaPredicate('(max-width: 1280px)');
  const biggerThan768 = useMediaPredicate('(min-width: 768px)');

  const navigationUi = () => {
    if (smallerThan1280 && biggerThan768) {
      return (
        <div className={s.box}>
          {isUserLogin && <NavigationMobile />}
          <BurgerMenu onClick={onClick} />
          {modalMenu && <BurgerNav />}
        </div>
      );
    }
    if (smallerThan1280) {
      return (
        <>
          <BurgerMenu onClick={onClick} />
          {modalMenu && <BurgerNav />}
        </>
      );
    }
    return (
      <div >
        <NavigationDairyCalculator />
      </div>
    );
  };

  return (
    <>
      <nav>{isUserLogin ? navigationUi() : <NavigationAuth />}</nav>
    </>
  );
};

export default Navigation;
