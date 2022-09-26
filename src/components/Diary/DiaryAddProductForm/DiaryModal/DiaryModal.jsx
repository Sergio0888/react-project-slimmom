import styles from "./DiaryModal.module.scss";

import TabletForm from "../TabletForm/TabletForm";

const Modal = ({onSubmit, onClickModal}) => {

    return (
        <div className={styles.backdrop}>

            <TabletForm onClickModal={onClickModal} isMobile={true} onSubmit={onSubmit}>
                <button 
                className={styles.btn}
                type="submit"
                >Add</button>
            </TabletForm>
        </div>
    )
};

export default Modal;