import { useState } from "react";
import styles from "./style/day.module.css"

type Event = {
    title: string;
    start_date: string;
    end_date: string;
};

export default function Day(props: { day: number; events: Event[] }) {
    const [info, setInfo] = useState(false);
    return (
        <div>
        <div className={styles.dayContainer} onClick={()=>setInfo(info?false:true)}>
            <div className={styles.dayNumber}>{props.day}</div>
            <div>予定:{props.events.length}</div>
        </div>
         <div>
                {info && (
                    <div className={styles.info}>
                        <div>
                            {props.day}日
                        </div>

                        <hr />

                        <div>
                            <div>
                                <label>event</label><br />
                                <input type="text" className={styles.input} />
                            </div>

                            <hr />

                            <div>
                                <label>start time</label><br />
                                <input type="time" className={styles.input} />
                            </div>

                            <hr />

                            <div>
                                <label>end time</label><br />
                                <input type="time" className={styles.input} />
                            </div>

                            <hr />
                        </div>

                        <button className={styles.addButton} onClick={() => setInfo(false)}>add</button>
                        <button className={styles.backButton} onClick={() => setInfo(false)}>back</button>

                        <ul className={styles.eventList}>
                            {props.events.map((event, index) => (
                            <li key={index} className={styles.eventItem}>
                                <strong>{event.title}</strong>
                                {new Date(event.start_date).toLocaleTimeString()} - {new Date(event.end_date).toLocaleTimeString()}
                            </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}