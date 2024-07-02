"use client"

import { useState } from "react";
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
        // const isToday = day === now.getDate() && month === now.getMonth() && year === now.getFullYear();
        const isToday = day === today.getDate();
        days.push(<div key={`day-${day}`} className={style.day} style={{color: isToday ? "yellow" : ""}}>{day}</div>);
    }

    return (
        <div className={style.container}>
            <div className={style.board}>

                <div className={style.header}>
                    <div>
                        <span className={style.month}>{month+1}月 </span>
                        <span>{year}</span>
                    </div>

                    <div>
                        <span>prev </span>
                        <span>next</span>
                    </div>
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
