"use client"

import { useState } from "react";
import style from "./style/calender.module.css"

const day = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const week = (year: number, month: number, day: number) => new Date(year, month, day).getDay();

enum Week {
    Sunday = "Sun",
    Monday = "Mon",
    Tuesday = "The",
    Wednesday = "Wed",
    Thursday = "Thu",
    Friday = "Fri",
    Saturday = "Sat",
}

const weekColorMap: { [key in Week]: string } = {
    "Mon": "grey",
    "The": "red",
    "Wed": "cyan",
    "Thu": "lime",
    "Fri": "violet",
    "Sat": "teal",
    "Sun": "orange",
};

const weekDays: Week[] = [Week.Sunday, Week.Monday, Week.Tuesday, Week.Wednesday, Week.Thursday, Week.Friday, Week.Saturday];

export default async function Calender() {

    const today = new Date();
    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth());
    const numDays = day(year, month); //その月の日数
    const firstDayOfWeek = week(year, month, 1); //最初の週

    const days = [];
    for (let i = 0; i < firstDayOfWeek; i++){
        days.push(<div key={`empty-${i}`} className="day empty"></div>)
    }
    
    for (let day = 1; day <= numDays; day++) {
        const weekDayIndex = week(year, month, day);
        // const isToday = day === now.getDate() && month === now.getMonth() && year === now.getFullYear();
        const isToday = day === today.getDate();
        days.push(<div key={`day-${day}`} className={style.day} style={{backgroundColor: isToday ? "blue" : ""}}>{day}</div>);
    }

    return (
        <div className={style.container}>
            <div className={style.board}>

                <div className={style.week}>
                    {weekDays.map((week, i) => 
                        <div key={`key-${i}`} style={{color: weekColorMap[week]}}>
                            {week}
                        </div>
                    )}
                </div>

                <div className={style.days}>
                    {days}
                </div>
            </div>
        </div>
    )
}
