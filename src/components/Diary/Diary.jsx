import {  useCallback } from "react";
import { useMediaPredicate } from "react-media-hook";
import { useDispatch, useSelector } from "react-redux";
import Notiflix from 'notiflix';

import DiaryAddProductForm from "./DiaryAddProductForm/DiaryAddProductForm";
import DiaryDateCalendar from "./DiaryDateCalendar/DiaryDateCalendar";
import DiaryProductsList from "./DiaryProductsList/DiaryProductsList";

import { addProduct, dayInfo, removeProduct } from "redux/summary/summary-operations";

import styles from "./Diary.module.scss";
import items from "./products.json"

import { getProducts } from "redux/summary/summary-selectors";
import { setNewDate } from "redux/summary/summary-slice";



const Diary = () => {

    const mobile = useMediaPredicate("(max-width: 480px)");
    
    
    const summaryProducts = useSelector(getProducts);
    const { loading, error, eatenProducts, dayId, date } = summaryProducts;

    const dispatch = useDispatch();


    const onAddProduct = (product, grams) => {
        const elem = items.find(({title}) => title.ru === product);
        if(!Boolean(elem)) {
           Notiflix.Notify.warning('...Ooops. We do not have such a product :(');
           return
        } else {
            const weight = grams;
            const id = elem._id.$oid;
            const total = {
                productId: id,
                weight,
                date
            }
            dispatch(addProduct(total))
        }  
    }

    const onRemoveProduct = useCallback((id) => {
          const data = {
            dayId,
            eatenProductId: id,
          };
          dispatch(removeProduct(data));
        },[dayId, dispatch]);

    const getInfoDay = useCallback((data) => {
          dispatch(setNewDate(data));
          dispatch(dayInfo(data));
          // eslint-disable-next-line
        },[]);


    return (
        <div className={styles.box}>
            <DiaryDateCalendar infoOfDay={getInfoDay}/>

            {mobile ? 
            <div>
            <DiaryProductsList items={eatenProducts} onClick={onRemoveProduct}/>
            <DiaryAddProductForm isMobile={true} onSubmit={onAddProduct}/>
            </div>
            : 
            <div>
            <DiaryAddProductForm isMobile={false} onSubmit={onAddProduct} />
            <DiaryProductsList items={eatenProducts} onClick={onRemoveProduct}/>
            </div>
            }  
            {loading && <p>...Loading</p>}
            {error && <p>Sorry. This page is not active</p>}
            
        </div>
    )
};

export default Diary;