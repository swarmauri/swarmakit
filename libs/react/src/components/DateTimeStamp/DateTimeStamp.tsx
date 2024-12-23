import React from 'react';

interface DateTimeStampProps {
  state: 'displayed' | 'hidden';
  dateTime: string;
}

const DateTimeStamp: React.FC<DateTimeStampProps> = ({ state, dateTime }) => {
  return (
    <div 
      className={`date-time-stamp ${state}`} 
      aria-hidden={state === 'hidden'} 
      aria-label={`Date and time is ${state}`}>
      {state === 'displayed' ? dateTime : null}
    </div>
  );
};

export default DateTimeStamp;