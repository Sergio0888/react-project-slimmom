import s from './MainPage.module.scss';
import Header from 'components/Header/Header';
import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { getDailyRateInGeneral } from 'shared/api/daily';
import ModalText from '../../shared/components/ModalText';
import { makeRandomProducts } from 'pages/CalculatorPage/CalculatorPage';
import { useModal } from '../../shared/hooks/useModal';
import { toggleModalRedux } from '../../redux/modal/modal-slice';

import Modal from 'components/Modal/Modal';
import DailyCaloriesForm from 'components/Forms/DailyCaloriesForm/DailyCaloriesForm';

const initialState = {
  calories: null,
  notAllowedProducts: [],
  loading: false,
  error: null,
  isModal: false,
};

const loadingState = prevState => ({
  ...prevState,
  error: null,
  loading: true,
});

const errorState = (prevState, error) => ({
  ...prevState,
  loading: false,
  error: {
    message: error.response.data.message,
    status: error.response.status,
  },
});

const MainPage = () => {
  const [state, setState] = useState(initialState);
  const { calories, notAllowedProducts, isModal } = state;

  const isModalOpen = useModal();
  const dispatch = useDispatch();

  const handleClick = async data => {
    setState(loadingState);
    const dataValuesToNumbers = {};
    Object.entries(data).forEach(([key, value]) => {
      dataValuesToNumbers[key] = Number(value);
    });

    try {
      const result = await getDailyRateInGeneral(dataValuesToNumbers);
      const { dailyRate, notAllowedProducts } = result;

      const products = makeRandomProducts(notAllowedProducts);
      const calories = Math.trunc(dailyRate);
      setState(prevState => ({
        ...prevState,
        calories,
        notAllowedProducts: products,
        loading: false,
        isModal: true,
      }));
    } catch (error) {
      console.log(error);
      setState(prevState => {
        return errorState(prevState, error);
      });
    }
  };

  useEffect(() => {
    if (isModal) {
      dispatch(toggleModalRedux());
      setState(prevState => ({ ...prevState, isModal: false }));
    }
  }, [dispatch, isModal]);

  const modalButtonClick = () => {
    dispatch(toggleModalRedux());
    setState(prevState => ({ ...prevState, isModal: false }));
  };

  return (
    <>
      <Header />
      <div className={s.wrapper}>
        <div className="container">
          <DailyCaloriesForm onSubmit={handleClick} />
        </div>
        {isModalOpen && (
          <Modal onClose={modalButtonClick}>
            <ModalText
              calories={calories}
              list={notAllowedProducts}
              onClick={modalButtonClick}
            />
          </Modal>
        )}
      </div>
    </>
  );
};

export default MainPage;
