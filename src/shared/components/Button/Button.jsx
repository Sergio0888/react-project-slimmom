import PropTypes from 'prop-types';
import s from './button.module.scss';

const Button = props => {
  const { type, text, onClick } = props;
  const setClass = () => {
    return s.btn;
  };
  return (
    <button className={setClass()} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  white: false,
  type: 'submit',
  onClick: () => {},
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;
