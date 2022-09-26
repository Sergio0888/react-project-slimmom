import { useState } from 'react';

import useForm from 'shared/hooks/useForm';
import initialState from './initialState';
import TextField from 'shared/components/TextField/TextField';
import fields from './textFields';
import RadioField from 'shared/components/RadioField/RadioField';

import Modal from 'components/Modal/Modal';

import s from './DailyCaloriesForm.module.scss';

const DailyCaloriesForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
    isReset: true,
  });

  const { weight, height, age, desiredWeight, bloodType } = state;

  const [modal, setModal] = useState(false);
  const body = document.querySelector('body');

  const toggleModal = () => {
    if (body.classList.contains(s.hidden)) {
      body.classList.remove(s.hidden);
      document.body.style.overflow = 'hidden';
    } else {
      body.classList.add(s.hidden);
      document.body.style.overflow = 'hidden';
    }
    setModal(!modal);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.form__width}>
        <div className={s.form__half}>
          <div className={s.form__block}>
            <TextField
              required
              onChange={handleChange}
              value={height}
              {...fields.height}
            />
          </div>
          <div className={s.form__block}>
            <TextField
              required
              onChange={handleChange}
              value={age}
              {...fields.age}
            />
          </div>
          <div className={s.form__block}>
            <TextField
              required
              onChange={handleChange}
              value={weight}
              {...fields.weight}
            />
          </div>
        </div>
        <div>
          <div className={s.form__block}>
            <TextField
              required
              onChange={handleChange}
              value={desiredWeight}
              {...fields.desiredWeight}
            />
          </div>
          <p className={s.form__text}> Blood type *</p>
          <div className={s.form__checkboxSet}>
            <RadioField
              onChange={handleChange}
              checked={bloodType === '1'}
              {...fields.bloodType1}
            />
            <RadioField
              onChange={handleChange}
              checked={bloodType === '2'}
              {...fields.bloodType2}
            />
            <RadioField
              onChange={handleChange}
              checked={bloodType === '3'}
              {...fields.bloodType3}
            />
            <RadioField
              onChange={handleChange}
              checked={bloodType === '4'}
              {...fields.bloodType4}
            />
          </div>
        </div>
      </div>
      <div className={s.from__block__btn}>
        <button className={s.form__btn__active} type="submit">
          Start losing weight
        </button>
        {modal && (
          <Modal onClose={toggleModal}>
            <h1 className={s.modal_title}>
              Your recommended daily calorie intake is
            </h1>
            <div className={s.modal_foods}>
              <p className={s.modal_caloriesNumber}>
                2800
                <span className={s.modal_calories}> kcal</span>
              </p>

              <h2 className={s.modal_subTitle}>Foods you should not eat</h2>
              <ul className={s.modal_list}>
                <li className={s.modal_list__element}>1. Flour products </li>
                <li className={s.modal_list__element}>2. Milk</li>
                <li className={s.modal_list__element}>3. Red meat</li>
                <li className={s.modal_list__element}>4. Smoked meats</li>
              </ul>
            </div>
            <div className={s.modal_button_style}>
              <button
                // text="Start losing weight"
                type="button"
                onClick={toggleModal}
                className={s.modal_button}
              >
                Start losing weight
              </button>
            </div>
            <button
              type="button"
              className={s.modal_closeBtn}
              onClick={toggleModal}
            ></button>
          </Modal>
        )}
      </div>
    </form>
  );
};

// DailyCaloriesForm.defaultProps = {
//   onSubmit: () => {},
// };

export default DailyCaloriesForm;
