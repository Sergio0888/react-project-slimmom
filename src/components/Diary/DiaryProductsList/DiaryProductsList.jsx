import DiaryProductsListItem from "./DiaryProductsListItem/DiaryProductsListItem";

import styles from "./diaryProductsList.module.scss"

const DiaryProductsList = ({items, onClick}) => {
    
    const elements = items.map(({title, kcal, weight, id}) => (
        <DiaryProductsListItem
        onClick={onClick}
        id={id}
        key={id}
        title={title}
        kcal={kcal}
        weight={weight}
         />
    ))

    const checkItemsOfProducts = Boolean(items.length === 0);

    return (

        <ul className={styles.list}>
            {checkItemsOfProducts && <p className={styles.text}>You haven't eaten a single food yet. Add eaten food.</p>}
            {elements.reverse()}
        </ul>
    )
};

DiaryProductsList.defaultProps = {
    items: []
}

export default DiaryProductsList;