const ModalList = ({ list }) => {
  const elements = () => {
    if (list && list.length > 0) {
      const items = list.map(el => <li key={el}>{el}</li>);
      return <ol>{items}</ol>;
    }
    return <p>You are allowed to eat everything</p>;
  };

  return elements();
};

export default ModalList;
