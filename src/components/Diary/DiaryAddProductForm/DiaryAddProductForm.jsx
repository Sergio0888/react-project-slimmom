import { useState } from "react";
import CircleButton from "./CircleButton/CircleButton";
import TabletForm from "./TabletForm/TabletForm";
import Modal from "./DiaryModal/DiaryModal";

import styles from "./DiaryAddProductForm.module.scss";

const DiaryAddProductForm = ({isMobile, onSubmit}) => {

    const [modal, setModal] = useState(false);

    const onModal = () => {
        setModal(prevState => (
            !prevState
        ))
    }

    return (
        <div>
            {isMobile ? <div className={styles.box}>
                    <CircleButton type="button" onClick={onModal} />
                {modal && <Modal onClickModal={onModal} onSubmit={onSubmit} />}
            </div>: <TabletForm onSubmit={onSubmit}/>}
        </div>
        
    )
};

export default DiaryAddProductForm;