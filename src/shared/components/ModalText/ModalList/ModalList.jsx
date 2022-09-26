import s from '../../../../components/Forms/DailyCaloriesForm/DailyCaloriesForm.module.scss';

const ModalList = ({ list }) => {
  const elements = () => {
    if (list && list.length > 0) {
      const items = list.map(el => (
        <li className={s.modal_list__element} key={el}>
          {el}
        </li>
      ));
      return <ol className={s.modal_list}>{items}</ol>;
    }
    return <p>You are allowed to eat everything</p>;
  };

  return elements();
};

export default ModalList;
