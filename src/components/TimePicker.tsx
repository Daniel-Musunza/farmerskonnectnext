'use client'

import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Button } from '@mantine/core';
// Predefined fixed times that cannot be selected
const fixedTimes = ['10:00', '14:00']; // Example fixed times in 24-hour format

export function TimePicker({ selectedTime, setSelectedTime }: any) {
  const [availableTimes] = useState(generateTimes()); // Generate a list of available times

  // Function to generate an array of time strings (e.g., "09:00", "09:30", ... "23:30")
  function generateTimes() {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) { // Change increment for different intervals
        const time = dayjs().set('hour', hour).set('minute', minute).format('HH:mm');
        times.push(time);
      }
    }
    return times;
  }

  const handleSelect = (time: string) => {
    if (!fixedTimes.includes(time)) {
      setSelectedTime(time); // Set selected time if it's not a fixed time
    }
  };

  return (
    <div className="relative p-2 h-[400px] w-[300px] overflow-y-auto" >

        <ul id="timetable" className="grid w-full grid-cols-4 gap-2" >
          {availableTimes.map((time) => (
            <li key={time}>
              <input type="radio" id="10-am" value="" className="hidden peer" name="timetable" />
              <button
                onClick={() => handleSelect(time)}
                disabled={fixedTimes.includes(time)} // Disable fixed times
                style={{
                  backgroundColor: selectedTime === time ? '#fcb797' : 'transparent',
                  cursor: fixedTimes.includes(time) ? 'not-allowed' : 'pointer',
                }}
                className={`inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-[#FF6922] dark:hover:border-gray-600  peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900`}>
                {time}
              </button>
            </li>
          ))}
        </ul>

    </div>
  );
}
