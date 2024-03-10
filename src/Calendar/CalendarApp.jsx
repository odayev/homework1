import React from "react";
import moment from "moment";
import 'moment/locale/ru';
import "./calendar.css";



const weekdays = [
  { id: 1, title: moment.weekdays(1), name: "Пн" },
  { id: 2, title: moment.weekdays(2), name: "Вт" },
  { id: 3, title: moment.weekdays(3), name: "Ср" },
  { id: 4, title: moment.weekdays(4), name: "Чт" },
  { id: 5, title: moment.weekdays(5), name: "Пт" },
  { id: 6, title: moment.weekdays(6), name: "Сб" },
  { id: 7, title: moment.weekdays(7), name: "Вс" },
];

const Weekdays = (weekday) => {
  return (
    <th scope="col" title={weekday.title} id={weekday.id}>
      {weekday.name}
    </th>
  );
};

const Calendar = () => {
  
  const date = moment().format("dddd");
  const time = moment().format("HH mm ss");
  const month = moment().format("MMMM");
  const year = moment().format("YYYY");
  const day = moment().format("D");


  return (
    <div className="calendar-ui">
      <div className="ui-datepicker">
        <h1>{date}</h1>
        <h2>{time}</h2>
        <div className="ui-datepicker-material-header">
          <div className="ui-datepicker-material-day">{date}</div>
          <div className="ui-datepicker-material-date">
            <div className="ui-datepicker-material-day-num">{day}</div>
            <div className="ui-datepicker-material-month">{month}</div>
            <div className="ui-datepicker-material-year">{year}</div>
          </div>
        </div>
        <div className="ui-datepicker-header">
          <div className="ui-datepicker-title">
            <span className="ui-datepicker-month">
              {month}
            </span>
            &nbsp;
            <span className="ui-datepicker-year">
              {year}
            </span>
          </div>
        </div>
        <table className="ui-datepicker-calendar">
          <colgroup>
            <col></col>
            <col></col>
            <col></col>
            <col></col>
            <col></col>
            <col className="ui-datepicker-week-end"></col>
            <col className="ui-datepicker-week-end"></col>
          </colgroup>
          <thead>
            <tr>
              {weekdays.map((weekday) => (
                <Weekdays
                  name={weekday.name}
                  tile={weekday.title}
                  id={weekday.id}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="ui-datepicker-other-month">29</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>7</td>
              <td>8</td>
              <td className="ui-datepicker-today">{moment().format("D")}</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const CalendarApp = () => {
  return <Calendar />;
};

export default CalendarApp;
