import React from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface DateRangeSelectorProps {
  startDate: Date;
  endDate: Date;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
}

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({ startDate, endDate, setStartDate, setEndDate }) => {
  return (
    <div className="flex justify-center my-4">
      <ReactDatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="dd/MM/yyyy"
        className="mr-2"
      />
      <ReactDatePicker
        selected={endDate}
        onChange={(date: Date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
};

export default DateRangeSelector;
