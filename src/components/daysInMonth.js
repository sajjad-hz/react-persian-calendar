import moment from "moment-jalaali";

export default function daysInMonth(month, selectedYear) {
    if (month > 0 && month < 7) return 31;
    else if (month > 6 && month < 12) return 30;
    else if (month === 12 && moment.jIsLeapYear(selectedYear)) return 30;
    else if (month === 12 && !moment.jIsLeapYear(selectedYear)) return 29;
  }