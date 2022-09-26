import s from './ExitButton.module.scss';
import { useDispatch } from 'react-redux';
import { getLogout } from 'redux/auth/authOperations';

const ExitButton = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(getLogout());
  };

  return (
    <button className={s.btn} onClick={onLogout} type="button">
      Exit
    </button>
  );
};

export default ExitButton;