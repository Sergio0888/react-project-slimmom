import styles from "./diaryProductsListItem.module.scss"


const DiaryProductsListItem = ({title, kcal, weight, id, onClick}) => {
    
    return (
        <li className={styles.item}>

            <p className={styles.name}>{title}</p>
            <p className={styles.grams}>{weight} g</p>
            <p className={styles.cal}>{Math.floor(kcal)} kcal</p>
            
            <button 
            onClick={() => onClick(id)}
            className={styles.btn}
            type="button">X</button>
        </li>
    )
};

export default DiaryProductsListItem;