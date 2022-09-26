import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import svg from "../../../images/diaryPage/calendar-svg.svg"
import styles from "./diarydatecalendar.module.scss";


const DiaryDateCalendar = ({ infoOfDay }) => {
    
    const [startDate, setStartDate] = useState(new Date());

    const createDate = date => {
        return { date: date.toISOString().slice(0, 10) };
      };
    
      useEffect(() => {
        infoOfDay(createDate(startDate));
      }, [infoOfDay, startDate]);
    

    return (
          <div className={styles.box}>
             <DatePicker 
             className={styles.calendar}
             selected={startDate} 
             dateFormat="dd.MM.yyyy"
             onChange={(date) => setStartDate(date)} />

            <svg className={styles.icon}>
                <use href={svg +"#calendar"}></use>
            </svg>
          </div>
    )
};

export default DiaryDateCalendar;

