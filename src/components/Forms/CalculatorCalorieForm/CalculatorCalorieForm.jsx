import { useMemo } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import s from './CalculatorCalorieForm.module.scss';

const CalculatorCalorieForm = ({onSubmit}) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <form onSubmit={onSubmit}>
      <div className={s.form__width}>
        <div className={s.form__half}>
          <div className={s.form__block}>
            <input
              className={s.form__input}
              id="height"
              type="number"
              min="1"
              max="3"
              pattern="[0-9]{3}"
              title="Height must contain minimum three digits and cannot contain spaces, dashes and letters."
              required
            />
            <label className={s.form__label} htmlFor="height">
              Height *
            </label>
          </div>
          <div className={s.form__block}>
            <input
              className={s.form__input}
              id="age"
              type="number"
              min="18"
              max="99"
              pattern="[0-9]{2}"
              title="Age must contain minimum two digits and cannot contain spaces, dashes and letters."
              required
            />
            <label className={s.form__label} htmlFor="age">
              Age *
            </label>
          </div>
          <div className={s.form__block}>
            <input
              className={s.form__input}
              id="current"
              type="number"
              min="30"
              max="333"
              pattern="[0-9]{3}"
              title="Weight must contain minimum two digits and cannot contain spaces, dashes and letters."
              required
            />
            <label className={s.form__label} htmlFor="current">
              2 Current weight *
            </label>
          </div>
        </div>

        <div>
          <div className={s.form__block}>
            <input
              className={s.form__input}
              id="desired"
              type="number"
              min="30"
              max="333"
              pattern="[0-9]{3}"
              title="Weight must contain minimum two digits and cannot contain spaces, dashes and letters."
              required
            />
            <label className={s.form__label} htmlFor="desired">
              Desired weight *
            </label>
          </div>
          <p className={s.form__text}> Blood type *</p>
          <div className={s.form__checkboxSet}>
            <input
              className={s.input}
              id={id}
              type="radio"
              name="bloodType"
              value="1"
            />
            <label className={s.form__check} htmlFor={id}>
              1
            </label>
            <input
              className={s.input}
              id={id}
              type="radio"
              name="bloodType"
              value="2"
            />
            <label className={s.form__check} htmlFor={id}>
              2
            </label>
            <input
              className={s.input}
              id={id}
              type="radio"
              name="bloodType"
              value="3"
            />
            <label className={s.form__check} htmlFor={id}>
              3
            </label>
            <input
              className={s.input}
              id={id}
              type="radio"
              name="bloodType"
              value="4"
            />
            <label className={s.form__check} htmlFor={id}>
              4
            </label>
          </div>
        </div>
      </div>
      <div className={s.from__block__btn}>
        <button className={s.form__btn__active} type="submit">
          Start losing weight
        </button>
      </div>
    </form>
  );
};

export default CalculatorCalorieForm;
