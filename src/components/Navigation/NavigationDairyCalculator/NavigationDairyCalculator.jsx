import { NavLink } from 'react-router-dom';

import s from './NavigationDairyCalculator.module.scss';

const NavigationDairyCalculator = () => {
  const getClassName = ({ isActive }) => {
    return isActive ? `${s.nav__link} ${s.active}` : s.nav__link;
  };

  return (
    <div className={s.nav}>
      <NavLink className={getClassName} to="/diary">
        Diary
      </NavLink>
      <NavLink className={getClassName} to="/calculator">
        Calculator
      </NavLink>
    </div>
  );
};

export default NavigationDairyCalculator;
