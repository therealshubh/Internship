import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/CalendarBox.css';

// Holidays for multiple months
const holidays = [
  { date: '2025-01-26', name: 'Republic Day' },
  { date: '2025-08-15', name: 'Independence Day' },
  { date: '2025-06-14', name: 'Pahili Raja' },
  { date: '2025-06-15', name: 'Raja Sankranti' },
  { date: '2025-06-27', name: 'Rath Yatra' },
  { date: '2025-06-28', name: 'Rath Yatra' },
  { date: '2025-06-29', name: 'Rath Yatra' },
  { date: '2025-06-30', name: 'Rath Yatra' },
  { date: '2025-07-01', name: 'Rath Yatra' },
  { date: '2025-07-02', name: 'Rath Yatra' },
  { date: '2025-07-05', name: 'Bahuda Yatra' },
  { date: '2025-07-06', name: 'Moharrum' },
  // Add more holidays for other months
];

function isHoliday(date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const dateStr = `${yyyy}-${mm}-${dd}`;
  return holidays.some(h => h.date === dateStr);
}

function isToday(d) {
  const today = new Date();
  return (
    d.getDate() === today.getDate() &&
    d.getMonth() === today.getMonth() &&
    d.getFullYear() === today.getFullYear()
  );
}

function getMonthHolidays(date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  return holidays.filter(h => h.date.startsWith(`${yyyy}-${mm}`));
}

function CalendarBox() {
  const [activeStartDate, setActiveStartDate] = useState(new Date());

  const monthHolidays = getMonthHolidays(activeStartDate);

  return (
    <div className="bg-white rounded shadow p-3 mb-4">
      <h5 className="mb-3 text-primary">Calendar</h5>
      <Calendar
        value={null} // No selected date, so blue circle never moves!
        onActiveStartDateChange={({ activeStartDate }) => setActiveStartDate(activeStartDate)}
        tileClassName={({ date, view }) => {
          if (view === 'month') {
            if (isToday(date)) return 'today-blue';
            if (isHoliday(date)) return 'red-day';
            if (date.getDay() === 0 || date.getDay() === 6) return 'red-day';
            return 'black-day';
          }
        }}
      />
      <p className="mt-3 text-center">
        <strong>Today's date:</strong> {new Date().toDateString()}
      </p>
      <div className="mt-3">
        <strong>Holidays in this month:</strong>
        {monthHolidays.length === 0 ? (
          <div className="text-muted">No holidays this month.</div>
        ) : (
          <ul className="holiday-list">
            {monthHolidays.map((h, idx) => (
              <li key={idx} className="text-danger">
                {parseInt(h.date.slice(-2), 10)} - {h.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CalendarBox;