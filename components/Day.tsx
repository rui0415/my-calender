import { ReactElement } from "react";
import styles from "./style/day.module.css"

type Event = {
    title: string;
    start_date: string;
    end_date: string;
};

export default function Day(props: { day: number; events: Event[] }) {
    return (
        <div className={styles.dayContainer}>
            <div className={styles.dayNumber}>{props.day}</div>
            <ul className={styles.eventList}>
                {props.events.map((event, index) => (
                    <li key={index} className={styles.eventItem}>
                        <strong>{event.title}</strong>
                        {/* {new Date(event.start_date).toLocaleTimeString()} - {new Date(event.end_date).toLocaleTimeString()} */}
                    </li>
                ))}
            </ul>
        </div>
    );
}
