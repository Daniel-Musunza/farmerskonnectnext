'use client'

import dayjs from 'dayjs';
import { useState } from 'react';
import { Calendar } from '@mantine/dates';

export function CalendarModal({ selected, setSelected }: any) {
  const fixedDates = [
    dayjs('2024-10-10').startOf('day'),
    dayjs('2024-10-14').startOf('day'),
  ]; // Fixed dates array

  const today = dayjs().startOf('day'); // Get today's date

  const handleSelect = (date: Date) => {
    const isFixedDate = fixedDates.some((fixedDate) =>
      dayjs(date).isSame(fixedDate, 'day')
    );

    if (!isFixedDate) {
      const formattedDate = dayjs(date).format('dddd, MMMM DD YYYY'); // Format date
      setSelected(formattedDate); // Allow selection and set formatted date
    }
  };

  return (
    <Calendar
      getDayProps={(date) => ({
        selected: dayjs(date).isSame(selected, 'day'), // Check if this date is the selected one
        onClick: () => handleSelect(date), // Handle click
        disabled:
          dayjs(date).isBefore(today, 'day') || // Disable dates before today
          fixedDates.some((fixedDate) => dayjs(date).isSame(fixedDate, 'day')), // Disable fixed dates
      })}
    />
  );
}
