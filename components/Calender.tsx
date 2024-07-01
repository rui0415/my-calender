"use client"

import { useState } from "react";

const day = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const week = (year: number, month: number, day: number) => new Date(year, month, day).getDay();

enum Week {
    Sunday = "日",
    Monday = "月",
    Tuesday = "火",
    Wednesday = "水",
    Thursday = "木",
    Friday = "金",
    Saturday = "土",
}

const weekColorMap: { [key in Week]: string } = {
    "月": "grey",
    "火": "red",
    "水": "cyan",
    "木": "lime",
    "金": "violet",
    "土": "teal",
    "日": "orange",
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
        days.push(<div key={`day-${day}`} style={{backgroundColor: isToday ? "blue" : ""}}>{day}</div>);
    }

    return (
        <div className="container">
            <div className="bg-slate-800">
                <div className="grid grid-cols-7 gap-20">
                    {days}
                </div>
            </div>
        </div>
    )
}
