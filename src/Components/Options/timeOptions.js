import React, { useState } from "react";

import { TimeOptionBox } from "../../styles/options.styles";

export default function TimeOptions({ hour, minute, time, changeCustomTime }) {
  const [customHour, setCustomHour] = useState(hour);
  const [customMinute, setCustomMinute] = useState(minute);

  //Fast forward time
  // useEffect(() => {
  //   console.log("once");
  //   let hour = customHour;
  //   let minute = customMinute;
  //   setInterval(() => {
  //     minute++;
  //     if (minute === 60) {
  //       hour++;
  //       minute = 0;
  //       if (hour === 24) hour = 0;
  //     }
  //     changeCustomTime(hour, minute);
  //   }, 100);
  // }, []);

  function changeTime(event) {
    setCustomHour(event.target.value.slice(0, 2));
    setCustomMinute(event.target.value.slice(3, 5));
  }

  console.log(customHour, customMinute);

  return (
    <TimeOptionBox>
      <label>
        Time:{" "}
        <input
          type="time"
          value={`${customHour}:${customMinute}`}
          onChange={changeTime}
        ></input>
        <button onClick={() => changeCustomTime(customHour, customMinute)}>
          Go
        </button>
      </label>
    </TimeOptionBox>
  );
}
