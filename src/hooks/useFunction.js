import moment from "moment";

export default function useFunction() {
  //🔹 Format chat timestamp for chat list display
  // Today      -> 10:30 AM
  // Yesterday  -> Yesterday
  // Within 7 days -> Monday
  // Older      -> MM/DD/YYYY
  function formatDateTime(time, getToday) {
    let days = moment().diff(moment(time), "days");

    if (days === 0 && !getToday) {
      return moment(time).format("LT");
    } else if (days === 0 && getToday) {
      return "Today";
    } else if (days === 1) {
      return "Yesterday";
    } else if (days < 8) {
      return moment(time).format("dddd");
    } else {
      return moment(time).format("L");
    }
  }
  return [formatDateTime];
}
