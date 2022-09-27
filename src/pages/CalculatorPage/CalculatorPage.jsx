import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import { useEffect, useState } from 'react';
import { toggleModalRedux } from 'redux/modal/modal-slice';
import { useDispatch, useSelector } from 'react-redux';

import { useModal } from 'shared/hooks/useModal';
import { getUserId } from 'redux/auth/authSelectors';
import { getDailyRateForUser } from 'shared/api/daily';
import { updateSummaryAndnotAllowedProducts } from '../../redux/summary/summary-slice';
import Header from 'components/Header/Header';
import DailyCaloriesForm from 'components/Forms/DailyCaloriesForm/DailyCaloriesForm';

import s from './CalculatorPage.module.scss';
import styles from '../DiaryPage/DiaryPage.module.scss';
import Modal from 'components/Modal/Modal';
import { useNavigate } from 'react-router';
import ModalText from 'shared/components/ModalText';

const initialState = {
  calories: '',
  notAllowedProducts: [],
  isModal: false,
  loading: false,
  error: null,
};

export const makeRandomProducts = arr => {
  if (arr.length > 10) {
    const randomIdx = [];
    for (let i = 0; i < 10; i += 1) {
      randomIdx.push(Math.floor(Math.random() * (arr.length - 1) + 1));
    }
    return arr.filter((_, idx) => randomIdx.includes(idx));
  }
  return arr;
};

const CalculatorPage = () => {
  const [state, setState] = useState(initialState);

  const { calories, notAllowedProducts, isModal } = state;
  
  const userId = useSelector(getUserId);
  console.log(userId)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isModalOpen = useModal();

  const handleClick = async data => {

    const dataValuesToNumbers = {};
    Object.entries(data).forEach(([key, value]) => {
      dataValuesToNumbers[key] = Number(value);
    });

    try {
      const result = await getDailyRateForUser(userId, dataValuesToNumbers);
      const { dailyRate, notAllowedProducts } = result;

      dispatch(updateSummaryAndnotAllowedProducts(result));

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
      setState(prevState => {
        return console.log(prevState, error);
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
    return navigate('/diary');
  };

  return (
    <div className={s.backgr}>
      <Header />
      <section className={s.CalculatorPageWrapper}>
        <div className={s.CalculatorLeftPart}>
          <p className={s.text}>
            Calculate your daily calorie intake right now
          </p>
          <DailyCaloriesForm onSubmit={handleClick} />
        </div>
        <aside className={styles.aside}>
          <RightSideBar />
        </aside>
        {isModalOpen && (
          <Modal>
            <ModalText
              calories={calories}
              list={notAllowedProducts}
              onClick={modalButtonClick}
            />
          </Modal>
        )}
      </section>
    </div>
  );
};

export default CalculatorPage;
