import s from './BurgerMenu.module.scss'

const BurgerMenu = ({onClick}) => {

  return (
    <button className={s.btn} type='button' onClick={onClick}>
      <span className={s.line}></span>
      <span className={s.line}></span>
      <span className={s.line}></span>
    </button>
  );
};

export default BurgerMenu;
