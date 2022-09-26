import { nanoid } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import s from './RadioField.module.scss';

const RadioField = props => {
  const { label, name, value, onChange, type, checked } = props;

  const id = useMemo(() => nanoid(), []);

  return (
    <>
      <input
        onChange={onChange}
        id={id}
        className={s.input}
        type={type}
        name={name}
        value={value}
        checked={checked}
      />
      <label htmlFor={id} className={s.form__check}>{label}</label>
    </>
  );
};

export default RadioField;
