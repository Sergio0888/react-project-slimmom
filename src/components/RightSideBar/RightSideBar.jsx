import { useSelector } from 'react-redux';
import s from './RightSideBar.module.scss';


import {
  getDayKcal,
  getdate,
  getFoodNotRecommended,
} from 'redux/summary/summary-selectors';

const RightSideBar = () => {
  const dayKcal = useSelector(getDayKcal);
  const currentDate = useSelector(getdate);
  const notRecommended = useSelector(getFoodNotRecommended);


  const newCurrentDate = () => {
    const date = new Date();
    if (currentDate) {
      const a = currentDate.split('');
      a.splice(4, 1, '/');
      const b = a;
      b.splice(7, 1, '/');

      return b.join('');
    }
    return date.toISOString().slice(0, 10);
  };

  const newSummary = () => {
    if (dayKcal?.dailyRate) {

      const { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } =
      dayKcal;

      const normalPercent = Math.floor(percentsOfDailyRate);
      const normalConsumed = Math.floor(kcalConsumed);
      const normaKcal = Math.floor(kcalLeft);
      const normalDay = Math.floor(dailyRate);

      return {
        kcalLeft: normaKcal,
        kcalConsumed: normalConsumed,
        dailyRate: normalDay,
        percentsOfDailyRate: normalPercent,
      };
    }
    return {
      kcalLeft: '0 ',
      kcalConsumed: '0 ',
      dailyRate: '0 ',
      percentsOfDailyRate: '0 ',
    };
  };

  const { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } =
    newSummary();

    return (
          <div className={s.sidebar}>
            <div className={s.summary}>
              <p className={s.summary__title}>{`Summary for ${newCurrentDate()}`}</p>
              <div className={s.box}>
                <ul className={s.list}>
                  <li className={s.item}>Left</li>
                  <li className={s.item}>Consumed</li>
                  <li className={s.item}>Daily rate</li>
                  <li className={s.item}> n% of normal</li>
                </ul>
                <ul className={s.summary__list}>
                  <li className={s.summary__listItem}>
                    <span>{kcalLeft}</span>kcal
                  </li>
                  <li className={s.summary__listItem}>
                    <span>{kcalConsumed}</span>kcal
                  </li>
                  <li className={s.summary__listItem}>
                    <span>{dailyRate}</span>kcal
                  </li>
                  <li className={s.summary__listItem}>
                    <span>{percentsOfDailyRate}</span> %
                  </li>
                </ul>
              </div>
            </div>
            <div className={s.notRecommended}>
              <p className={s.summary__title}>Food not recommended</p>
      
              {notRecommended && notRecommended.length > 0 ? (
                <ul className={s.prodList}>{notRecommended.slice(0, 10).map(el => <li key={el} className={s.prodItem}>{el}</li>) ?? null}</ul>
              ) : (
              <p className={s.summary__subtitle}>
              Your diet will be displayed here
              </p>
              )}
            </div>
          </div>
        );
      };

export { RightSideBar };