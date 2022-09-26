import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import ModalList from './ModalList/ModalList';
import s from '../../../components/Forms/DailyCaloriesForm/DailyCaloriesForm.module.scss';

const ModalText = ({ calories, list, onClick }) => {
  return (
    <>
      <h2 className={s.modal_title}>
        Your recommended daily calorie intake is:
      </h2>
      <div className={s.modal_foods}>
        <p className={s.modal_caloriesNumber}>
          {calories} <span className={s.modal_calories}>kcal</span>
        </p>
        <h3 className={s.modal_subTitle}>Foods you should not eat</h3>
        <ModalList list={list} />
      </div>
      <NavLink to={'register'}>
        <Button type="button" onClick={onClick} text="Start losing weight" />
      </NavLink>

      <button
        type="button"
        className={s.modal_closeBtn}
        onClick={onClick}
      ></button>
    </>
  );
};

ModalText.defaultProps = {
  list: [],
  onClick: () => {},
};

ModalText.propTypes = {
  calories: PropTypes.number.isRequired,
  list: PropTypes.array,
  onClick: PropTypes.func.isRequired,
};

export default ModalText;
