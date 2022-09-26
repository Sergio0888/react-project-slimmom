import { NavLink } from 'react-router-dom';
import s from './NavigationAuth.module.scss';

const NavigationAuth = () => {
  const getClassName = ({ isActive }) => {
    return isActive ? `${s.nav__link} ${s.active}` : s.nav__link;
  };

  return (
    <div className={s.nav}>
      <NavLink className={getClassName} to="/login">
        sign in
      </NavLink>
      <NavLink className={getClassName} to="/register">
        registration
      </NavLink>
    </div>
  );
};

export default NavigationAuth;
