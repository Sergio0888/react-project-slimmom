import NavigationDairyCalculator from '../NavigationDairyCalculator/NavigationDairyCalculator';
import s from './BurgerNav.module.scss';

const BurgerNav = () => {
  return (
    <div className={s.box}>
      <NavigationDairyCalculator />
    </div>
  );
};

export default BurgerNav;
