import React, { useState } from 'react';
import './CalendarView.css';

interface Event {
  id: number;
  title: string;
  description: string;
  start: Date;
  end: Date;
}

interface CalendarViewProps {
  events: Event[];
  onEventClick: (event: Event) => void;
  onEventAdd: (event: Event) => void;
  onEventEdit: (event: Event) => void;
  onEventDelete: (id: number) => void;
}

const CalendarView: React.FC<CalendarViewProps> = ({ events, onEventClick, onEventAdd, onEventEdit, onEventDelete }) => {
  const [view, setView] = useState<'day' | 'week' | 'month' | 'year' | 'agenda'>('month');

  const renderEvents = (period: 'day' | 'week' | 'month' | 'year' | 'agenda') => {
    return events.map((event) => (
      <div key={event.id} className="event" onClick={() => onEventClick(event)}>
        <span>{event.title}</span>
        <span>{event.start.toLocaleString()}</span>
      </div>
    ));
  };

  return (
    <div className={`calendar-view calendar-view-${view}`}>
      <div className="view-selector">
        <button onClick={() => setView('day')}>Day</button>
        <button onClick={() => setView('week')}>Week</button>
        <button onClick={() => setView('month')}>Month</button>
        <button onClick={() => setView('year')}>Year</button>
        <button onClick={() => setView('agenda')}>Agenda</button>
      </div>
      <div className="calendar-content">
        {renderEvents(view)}
      </div>
    </div>
  );
};

export default CalendarView;