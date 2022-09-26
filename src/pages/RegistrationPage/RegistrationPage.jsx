import RegistrationForm from 'components/Forms/RegistrationForm/RegistrationForm';
import s from './RegistrationPage.module.scss';
import Header from 'components/Header/Header';
const RegistrationPage = () => {
  return (
    <>
      <Header />
      <div className={s.wrapper}>
        <div className="container">
          <div className={s.login__section}>
            <div className={s.login__block}>
              <h3 className={s.login__page__title}> Register</h3>
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
