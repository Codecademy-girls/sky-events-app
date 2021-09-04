import React, { Component } from "react";

const today = new Date();
const date = today.getDate();
const month = today.getMonth() + 1;

const sunEvents = {
  3: "spring equinox",
  6: "summer solstice",
  9: "autumn equinox",
  12: "winter solstice"
}

let nextSunEvent;

const nearestEvent = (date, month) => {
  if (month < 3 || (month === 3 && date < 20)) {
    nextSunEvent = sunEvents[3];
    return getNumberOfDays(today, `3/20/${getYear(date, month)}`);
  } else if ((month > 3 && month < 6) || (month === 6 && date < 21)) {
    nextSunEvent = sunEvents[6];
    return getNumberOfDays(today, `6/21/${getYear(date, month)}`);
  } else if ((month > 6 && month < 9) || (month === 9 && date < 22)) {
    nextSunEvent = sunEvents[9];
    return getNumberOfDays(today, `9/22/${getYear(date, month)}`);
  } else if (month > 9 || (month === 12 && date < 21)) {
    nextSunEvent = sunEvents[12];
    return getNumberOfDays(today, `12/21/${getYear(date, month)}`);
  }
}

const getNumberOfDays = (start, end) => {
  const date1 = new Date(start);
  const date2 = new Date(end);
  const oneDay = 1000 * 60 * 60 * 24;

  const diffInTime = date2.getTime() - date1.getTime();
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}

const getYear = (date, month) => {
  if (month === 12 && date > 21) {
    return today.getFullYear() + 1;
  } else {
    return today.getFullYear();
  }
}

export default class Solstice extends Component {
  render() {
    return (
      <section className="solstice">
        <p>Days until the next sun event: {nearestEvent (date, month)} days until {nextSunEvent}</p>
      </section>
    );
  }
}