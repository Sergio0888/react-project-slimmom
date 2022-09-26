import { nanoid } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import s from './TextField.module.scss';

const TextField = props => {
  const {
    label,
    name,
    value,
    onChange,
    placeholder,
    required,
    type,
    pattern,
    title,
    minLength,
    maxLength,
    min,
    max,
  } = props;

  const id = useMemo(() => nanoid(), []);

  return (
    <>
      <input
        onChange={onChange}
        id={id}
        className={s.form__input}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        title={title}
        minLength={minLength}
        maxLength={maxLength}
        min={min}
        max={max}
        
      />
      <label htmlFor={id} className={s.form__label}>
        {label}
      </label>
    </>
  );
};

export default TextField;
