import { useMediaPredicate } from 'react-media-hook';
import { useSelector } from 'react-redux';

import s from './RightSideBar.module.scss';

import {
  summary,
  getdate,
  getFoodNotRecommended,
} from 'redux/summary/summary-selectors';

const RightSideBar = () => {
  
  const daySummary = useSelector(summary);
  const currentDate = useSelector(getdate);
  const notRecommended = useSelector(getFoodNotRecommended);

  

  const newCurrentDate = () => {
    if (currentDate) {
      const a = currentDate.split('');
      a.splice(4, 1, '/');
      const b = a;
      b.splice(7, 1, '/');

      return b.join('');
    }
    return;
  };

  const newSummary = () => {
    if (daySummary.dailyRate) {
      const dataValuesToMathFloor = {};

      Object.entries(daySummary).forEach(([key, value]) => {
        dataValuesToMathFloor[key] =
          Math.floor(value) > 0 ? Math.floor(value) : '0';
      });

      const { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } =
        dataValuesToMathFloor;

      return {
        kcalLeft,
        kcalConsumed,
        dailyRate,
        percentsOfDailyRate,
      };
    }
    return {
      kcalLeft: '000',
      kcalConsumed: '000',
      dailyRate: '000',
      percentsOfDailyRate: '000',
    };
  };

  const foodNotRecommendedList = () => {
    const elements = notRecommended.slice(0, 10).map(el => <li className={s.prodItem} key={el}>{el}</li>);

    return <ul className={s.prodList}>{elements}</ul>;
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

        {notRecommended.length > 0 ? (
          foodNotRecommendedList()
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
