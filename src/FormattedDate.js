import React from "react";
import "./FormattedDate.css";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let year = props.date.getFullYear();
  let month = props.date.getMonth();
  let todayDate = props.date.getDate();
  let day = props.date.getDay();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  if (todayDate < 10) {
    todayDate = `0${todayDate}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="current-day">
      <ul>
        <li>
          {days[day]} {hours}:{minutes}
        </li>
        <li>
          {year}-{months[month]}-{todayDate}
        </li>
      </ul>
    </div>
  );
}
