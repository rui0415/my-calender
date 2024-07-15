import { useState } from 'react';
import styles from './style/day.module.css';
import { supabase } from '@supabase/auth-ui-shared';
import { createClient } from '@/utils/supabase/client';
import { time } from 'console';

type Event = {
  title: string;
  start_date: string;
  end_date: string;
};

type Day = {
  day: number,
  month: number,
  year: number
}

export default function Day(props: { day: Day; isToday: boolean, events: Event[] }) {
  const [info, setInfo] = useState(false);
  const [addEvent, setAddEvent] = useState(false);
  const [text, setText] = useState("")
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const onSubmit = async (event: any) => {
    const supabase = createClient();
    event.preventDefault();
    try {
      let {data, error} = await supabase
        .from("events")
        .insert([
          { 
            title: text,
            start_time: startTime,
            end_time: endTime,
            date: `${props.day.year}-${props.day.month}-${props.day.day}`
          }
        ])


        if (error){
          console.log(error);
        }
    } catch (error){
      console.log(error);
    }
  }

  return (
    <div>
      <div
        className={styles.dayContainer}
        onClick={() => setInfo(info ? false : true)}
      >
        <div className={styles.dayNumber} style={{color:props.isToday?"yellow":""}}>{props.day.day}</div>
        <div>{props.events.length}</div>
      </div>
      <div>
        {info && (
          <div className={styles.info}>
            <ul className={styles.eventList}>
              {props.events.map((event, index) => (
                <li
                  key={index}
                  className={styles.eventItem}
                >
                  <strong>{event.title}</strong>
                  {new Date(event.start_date).toLocaleTimeString()} -{' '}
                  {new Date(event.end_date).toLocaleTimeString()}
                </li>
              ))}
            </ul>

            <button
              className={styles.addButton}
              onClick={() => setAddEvent(true)}
            >
              add
            </button>
            <button
              className={styles.backButton}
              onClick={() => setInfo(false)}
            >
              back
            </button>
          </div>
        )}
        {addEvent && (
          <form onSubmit={onSubmit}>
          <div className={styles.info}>
            <div>{props.day.day}日</div>

            <hr />

            <div>
              <div>
                <label>event</label>
                <br />
                <input
                  type="text"
                  className={styles.input}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                />
              </div>

              <hr />

              <div>
                <label>start time</label>
                <br />
                <input
                  type="time"
                  className={styles.input}
                  // value={startTime}
                  onChange={(e) => setText(e.target.value)}
                  required
                />
              </div>

              <hr />

              <div>
                <label>end time</label>
                <br />
                <input
                  type="time"
                  className={styles.input}
                  // value={endTime}
                  onChange={(e) => setText(e.target.value)}
                  required
                />
              </div>

              <hr />
            </div>

            <button
              className={styles.addButton}
              //   onClick={() => setInfo(false)}
            >
              add
            </button>
            <button
              className={styles.backButton}
              onClick={() => setAddEvent(false)}
            >
              back
            </button>
          </div>
          </form>
        )}
      </div>
    </div>
  );
}
