import { useState, useEffect } from "react";

const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

function Calendar({ selectedDate, setSelectedDate, isReadOnly = false }) {
  const [viewDate, setViewDate] = useState(() =>
    selectedDate ? new Date(selectedDate) : new Date(),
  );

  useEffect(() => {
    if (selectedDate) {
      setViewDate(new Date(selectedDate));
    }
  }, [selectedDate]);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const handlePrevMonth = () => {
    setViewDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarCells = [];
  for (let i = 0; i < startOffset; i++) {
    calendarCells.push({ day: null, key: `empty-${i}` });
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarCells.push({ day, key: `day-${day}` });
  }

  const parsedSelected = selectedDate ? new Date(selectedDate) : null;
  const today = new Date();

  const handleSelectDay = (day) => {
    if (isReadOnly || !day) return;
    const chosenDate = new Date(year, month, day, 12, 0, 0);
    setSelectedDate(chosenDate.toISOString());
  };

  const isValidDate = parsedSelected && !Number.isNaN(parsedSelected.getTime());

  const formattedFooterDate = isValidDate
    ? parsedSelected.toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      })
    : "";

  return (
    <div className="pop-new-card__calendar calendar">
      <p className="calendar__ttl subttl">Даты</p>
      <div className="calendar__block">
        <div className="calendar__nav">
          <div className="calendar__month">
            {monthNames[month]} {year}
          </div>
          <div className="nav__actions">
            <div
              className="nav__action"
              data-action="prev"
              onClick={handlePrevMonth}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </div>
            <div
              className="nav__action"
              data-action="next"
              onClick={handleNextMonth}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="calendar__content">
          <div className="calendar__days-names">
            <div className="calendar__day-name">пн</div>
            <div className="calendar__day-name">вт</div>
            <div className="calendar__day-name">ср</div>
            <div className="calendar__day-name">чт</div>
            <div className="calendar__day-name">пт</div>
            <div className="calendar__day-name -weekend-">сб</div>
            <div className="calendar__day-name -weekend-">вс</div>
          </div>
          <div className="calendar__cells">
            {calendarCells.map(({ day, key }) => {
              if (!day) {
                return (
                  <div key={key} className="calendar__cell _other-month"></div>
                );
              }

              const isToday =
                today.getDate() === day &&
                today.getMonth() === month &&
                today.getFullYear() === year;

              const isSelected =
                parsedSelected &&
                parsedSelected.getDate() === day &&
                parsedSelected.getMonth() === month &&
                parsedSelected.getFullYear() === year;

              const cellClass = [
                "calendar__cell",
                "_cell-day",
                isToday ? "_current" : "",
                isSelected ? "_active-day" : "",
              ].join(" ");
              return (
                <div
                  key={key}
                  onClick={() => handleSelectDay(day)}
                  style={{
                    cursor: isReadOnly ? "default" : "pointer",
                  }}
                  className={cellClass}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
        <div className="calendar__period">
          {formattedFooterDate ? (
            <p className="calendar__p date-end">
              Срок исполнения:{" "}
              <span className="date-control">{formattedFooterDate}</span>
            </p>
          ) : (
            <p className="calendar__p date-end">
              Выберите срок исполнения <span className="date-control"></span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
