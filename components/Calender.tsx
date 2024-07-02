"use client"

import { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import style from "./style/calender.module.css"

const day = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const week = (year: number, month: number, day: number) => new Date(year, month, day).getDay();

const Week = ["Sun","Mon","The", "Wed","Thu","Fri","Sat"]


export default function Calender() {

    const today = new Date();
    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth());
    const numDays = day(year, month); //その月の日数
    const firstDayOfWeek = week(year, month, 1); //最初の週

    const weeks = [];
    const days = [];

    for (let i = 0; i < 7; i++){
        weeks.push(<div>{Week[i]}</div>)
    }

    for (let i = 0; i < firstDayOfWeek; i++){
        days.push(<div key={`empty-${i}`} className="day empty"></div>)
    }
    
    for (let day = 1; day <= numDays; day++) {
        const weekDayIndex = week(year, month, day);
        const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
        days.push(<div key={`day-${day}`} className={style.day} style={{color: isToday ? "yellow" : ""}}>{day}</div>);
    }

    const prevMonth = () => {
        setMonth(prev => prev === 0 ? 11 : prev - 1);
        if (month === 0) {
            setYear(prev => prev - 1);
        }
    };

    const nextMonth = () => {
        setMonth(prev => prev === 11 ? 0 : prev + 1);
        if (month === 11) {
            setYear(prev => prev + 1);
        }   
    };

    const backToday = () => {
        setYear(today.getFullYear());
        setMonth(today.getMonth());
    };

    return (
        <div className={style.container}>
            <div className={style.board}>

                <div className={style.header}>
                    <div className={style.date}>
                        <span className={style.month}>{month+1} 月</span>
                        <span> {year}</span>
                    </div>

                    <div className={style.button}>
                        <button onClick={prevMonth} style={{marginRight:"3rem"}}><FaAngleLeft /></button>
                        <button onClick={nextMonth}><FaAngleRight /></button>
                    </div>

                    <button className={style.backToday} onClick={backToday}>
                        {today.getDay()}
                    </button>
                </div>

                <div className={style.week}>
                    {weeks}
                </div>

                <div className={style.days}>
                    {days}
                </div>
            </div>
        </div>
    )
}
