import styles from "./CircleButton.module.scss";

const CircleButton = ({type, onClick}) => {
    return (
        <button 
            onClick={onClick}
            className={styles.btn}
            type={type}>+
        </button>
    )
};

export default CircleButton;