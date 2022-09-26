import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import s from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={s.loader__block}>
      <div className={s.loader__wrapper}>
        <ThreeCircles
          color="#f07416"
          arialLabel="loading-indicator"
          height="120"
          width="120"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    </div>
  );
};
