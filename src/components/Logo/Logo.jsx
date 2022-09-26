import { NavLink } from 'react-router-dom';
import { useMediaPredicate } from 'react-media-hook';

import logoDesk from '../../images/logo-desk.jpg';
import logoTab from '../../images/logo-tab.jpg';
import logoMob from '../../images/logo-mob.jpg';

const Logo = () => {
  const smallerThan1280 = useMediaPredicate('(max-width: 1280px)');
  const biggerThan768 = useMediaPredicate('(min-width: 768px)');

  const logoSize = () => {
    if (smallerThan1280 && biggerThan768) {
      return <img src={logoTab} alt="logo" />;
    }
    if (smallerThan1280) {
      return <img src={logoMob} alt="logo" />;
    }
    if (smallerThan1280) {
      return <img src={logoTab} alt="logo" />;
    }
    return <img src={logoDesk} alt="logo" />;
  };

  return <NavLink to="/">{logoSize()}</NavLink>;
};

export default Logo;
