import React, { useState, useEffect } from "react";
import Wheel from "./partials/WheelDatePicker";
import moment from "moment-jalaali";

const App = () => {
  const [updateValue, setUpdateValue] = useState();
  const [numberOfDaysInMonth, setNumberOfDaysInMonth] = useState(
    moment.jDaysInMonth(moment().jYear, moment().jMonth())
  );

  // TODO: add full date and miliseconds to the updateValue object
  if (updateValue) {
    console.log("full", Object.values(updateValue).join("/"));
  }

  function formatYear(_relative, absolute) {
    return moment().subtract(absolute, "years").format("jYYYY");
  }

  function formatMonth(_relative, absolute) {
    return moment().subtract(absolute, "months").format("jM");
  }

  function formatDays(_relative, absolute) {
    const day = (((absolute + numberOfDaysInMonth - 1) % numberOfDaysInMonth) + numberOfDaysInMonth) % numberOfDaysInMonth;
    const reversedDay = numberOfDaysInMonth - day;
    return reversedDay === 0 ? numberOfDaysInMonth : reversedDay;
  }

  useEffect(() => {
    const persianMonth = +updateValue?.month - 1;
    const persianYear = +updateValue?.year;
    const numberOfDays = moment.jDaysInMonth(persianYear, persianMonth);
    console.log('numberOfDays', numberOfDays)
    setNumberOfDaysInMonth(numberOfDays);
  }, [updateValue?.month, updateValue?.year]);

  return (
    <div
      style={{
        height: "240px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
      }}
    >
      <div style={{ width: 70, height: 180 }}>
        <Wheel
          loop
          length={10}
          width={140}
          // perspective="left"
          setValue={formatYear}
          setUpdateValue={setUpdateValue}
          unit="year"
        />
      </div>
      <div style={{ width: 70, height: 180 }}>
        <Wheel
          loop
          length={10}
          width={23}
          setValue={formatMonth}
          setUpdateValue={setUpdateValue}
          unit="month"
        />
      </div>
      <div style={{ width: 70, height: 180 }}>
        <Wheel
          loop
          length={10}
          setValue={formatDays}
          width={23}
          perspective="left"
          setUpdateValue={setUpdateValue}
          initIdx={numberOfDaysInMonth - moment().jDate() +1 }  
          unit="day"
        />
      </div>
    </div>
  );
};

export default App;
