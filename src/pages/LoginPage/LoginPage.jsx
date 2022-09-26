import LoginForm from 'components/Forms/LoginForm/LoginForm';
import Header from 'components/Header/Header';
import s from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className={s.wrapper}>
        <div className="container">
          <div className={s.login__section}>
            <div className={s.login__block}>
              <h3 className={s.login__page__title}>Sign in</h3>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
