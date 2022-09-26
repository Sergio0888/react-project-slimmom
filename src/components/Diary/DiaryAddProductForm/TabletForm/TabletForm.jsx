import { useState, useEffect } from "react";
import CircleButton from "../CircleButton/CircleButton";
import products from "../../products";

import styles from "./TabletForm.module.scss"

const TabletForm = ({onSubmit, isMobile, children, onClickModal}) => {


    const [input, setInput] = useState('');
    const [weight, setWeight] = useState('');
    const [items, setItems] = useState([]);

    useEffect(() => {
        if(input.length > 2) {
            onFilter(input)
            return
        } 
        return setItems([])
    }, [input])

    const onFilter = (name) => {
        const result = products.filter(({title}) => title.ru.includes(name))
        return setItems(result);
    };

    const handleChange = ({ target }) => {
        const { name, value } = target;
        if(name === 'name') {
          return setInput(value)
        }
        return setWeight(value)
      };

    const onClickButton = (title) => {
        setInput(title.ru)
    };

    const handleSubmit = e => {
        e.preventDefault()
        onSubmit(input, weight)
        if(onClickModal) {
            onClickModal()
        }
        return (
            setInput(''),
            setWeight('')
        )
    }
    

    const title = items.map(({title,_id}) => 
    <p 
    onClick={() => onClickButton(title)}
    className={styles.title} 
    key={_id.$oid}>{title.ru}</p>)

    return (
        <form 
        onSubmit={handleSubmit} 
        className={styles.form}>

            <input
            onChange={handleChange}
            className={styles.product}
            type="text" 
            name="name"
            autoComplete="off"
            value={input}
            placeholder="Enter product name"/>
            
            {items.length > 2 && 
            <div className={styles.box_title}>{title}</div>}



            <input
            onChange={handleChange}
            name="grams"
            value={weight}
            className={styles.grams}
            type="text"
            placeholder="Grams"/>


            {!isMobile && <CircleButton type="submit"/>}
            {isMobile && children}
        </form>
    )
};

export default TabletForm;