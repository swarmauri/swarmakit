import React, { useState } from 'react';
import './RecurringEventScheduler.css';

interface RecurringEvent {
  id: string;
  title: string;
  recurrencePattern: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface RecurringEventSchedulerProps {
  initialEvents: RecurringEvent[];
}

const RecurringEventScheduler: React.FC<RecurringEventSchedulerProps> = ({ initialEvents }) => {
  const [events, setEvents] = useState<RecurringEvent[]>(initialEvents);
  const [newEvent, setNewEvent] = useState<RecurringEvent>({
    id: '',
    title: '',
    recurrencePattern: 'daily',
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleAddEvent = () => {
    setEvents([...events, { ...newEvent, id: String(Date.now()) }]);
    setNewEvent({ id: '', title: '', recurrencePattern: 'daily', startDate: '', endDate: '', description: '' });
  };

  return (
    <div className="recurring-event-scheduler">
      <div className="event-form">
        <input
          type="text"
          placeholder="Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <select
          value={newEvent.recurrencePattern}
          onChange={(e) => setNewEvent({ ...newEvent, recurrencePattern: e.target.value })}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
        <input
          type="date"
          value={newEvent.startDate}
          onChange={(e) => setNewEvent({ ...newEvent, startDate: e.target.value })}
        />
        <input
          type="date"
          value={newEvent.endDate}
          onChange={(e) => setNewEvent({ ...newEvent, endDate: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
        />
        <button onClick={handleAddEvent}>Create Recurring Event</button>
      </div>
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-item">
            <h3>{event.title}</h3>
            <p>{event.recurrencePattern}</p>
            <p>{event.startDate} to {event.endDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecurringEventScheduler;