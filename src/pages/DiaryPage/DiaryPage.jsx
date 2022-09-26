import Diary from 'components/Diary/Diary';
import styles from './DiaryPage.module.scss';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import Header from 'components/Header/Header';
const DiaryPage = () => {
  return (
    <div>
      <div className={styles.HeaderWrapper}>
        <Header />
      </div>
      <div className={styles.DiaryPageWrapper}>
        <div className={styles.box}>
          <div className={styles.LeftPartContainer}>
            <Diary />
          </div>
        </div>
        <aside className={styles.aside}>
          <RightSideBar />
        </aside>
      </div>
    </div>
  );
};

export default DiaryPage;
