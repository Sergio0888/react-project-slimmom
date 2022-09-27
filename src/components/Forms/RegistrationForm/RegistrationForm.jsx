import s from '../LoginForm/LoginForm.module.scss';
import { useState } from 'react';


import { useNavigate } from 'react-router';

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

const RegistrationForm = () => {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username, email, password } = state;


  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register(state));

    setState({
      username: '',
      email: '',
      password: '',
    });

    navigate('/login');
  };

  const onClickLoginBtn = () => {
    return navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.form__width}>
        <div className={s.form__block}>
          <input
            onChange={handleChange}
            className={s.form__input}
            id="username"
            type="text"
            name="username"
            value={username}
            // required
            autoComplete="off"
            pattern="[a-z]{1,15}"
            title="Username should only contain lowercase letters"
          />
          <label className={s.form__label} htmlFor="username">
            Name *
          </label>
        </div>
        <div className={s.form__block}>
          <input
            onChange={handleChange}
            className={s.form__input}
            id="email"
            type="email"
            name="email"
            value={email}
            autoComplete="off"
            // required
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
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
            value={password}
            // required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Password field: Minimum 8 characters, one number, uppercase letter and lowercase"
          />
          <label className={s.form__label} htmlFor="password">
            Password *
          </label>
        </div>
      </div>
      <div className={s.from__block__btn}>
        <button
          onClick={onClickLoginBtn}
          className={s.form__btn__disabled}
          type="button"
          disabled
        >
          Login
        </button>
        <button className={s.form__btn__secondary} type="submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
