import React from "react";
import Wheel from "./partials/WheelDatePicker";
import moment, { usePersian } from "moment-jalaali";
import latinToPersianNumber from "./utils/persianNumbers";
import daysInMonth from "./components/daysInMonth";

const App = () => {
  const today = moment().format("jYYYY-jM-jD").toLocaleString();
  console.log("today", today);

  const date = {
    month: Number(moment().format("jM")) - 1,
  };

  console.log("date.month", date.month);

  moment.loadPersian({ usePersianDigits: true }); // after this line all digits convert to persian string

  function formatYear(_relative, absolute) {
    return moment().subtract(absolute, "years").format("jYYYY");
  }

  function formatMonth(_relative, absolute) {
    return moment().subtract(absolute, "months").format("jM");
  }

  function formatDay(_relative, absolute) {
    const numberOfDays = moment.jDaysInMonth(1395, 11)
    console.log('numberOfDays', numberOfDays)
    return moment().subtract(absolute, "days").format("jD");
  }

  console.log(moment.jDaysInMonth(1391, 11));

  const days = moment.jDaysInMonth();
  // console.log('days', days)

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
          length={12}
          width={140}
          perspective="left"
          setValue={formatYear}
          
        />
      </div>
      <div style={{ width: 70, height: 180 }}>
        <Wheel loop length={12} width={23} setValue={formatMonth} />
      </div>
      <div style={{ width: 70, height: 180 }}>
        <Wheel
          loop
          length={12}
          width={23}
          setValue={formatDay}
          perspective="left"
        />
      </div>
    </div>
  );
};

export default App;
