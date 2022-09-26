import s from './LoginForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/authOperations';

import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const { email, password } = state;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login(state));

    setState({
      email: '',
      password: '',
    });
  };

  const onClickSecondaryBtn = () => {
    return navigate('/register');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.form__width}>
        <div className={s.form__block}>
          <input
            onChange={handleChange}
            className={s.form__input}
            id="email"
            type="text"
            name="email"
            value={email}
            autoComplete="off"
            required
          />
          <label className={s.form__label} htmlFor="email">
            Email *
          </label>
        </div>
        <div className={s.form__block}>
          <input
            onChange={handleChange}
            className={s.form__input}
            id="password"
            type="password"
            name="password"
            autoComplete="off"
            value={password}
            required
          />
          <label className={s.form__label} htmlFor="password">
            Password *
          </label>
        </div>
      </div>
      <div className={s.from__block__btn}>
        <button className={s.form__btn__active} type="submit">
          Login
        </button>
        <button
          onClick={onClickSecondaryBtn}
          className={s.form__btn__secondary}
          type="button"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
