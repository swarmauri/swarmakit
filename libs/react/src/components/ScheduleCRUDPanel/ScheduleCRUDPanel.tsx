import React, { useState } from 'react';
import './ScheduleCRUDPanel.css';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  participants: string;
}

const ScheduleCRUDPanel: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);

  const handleCreate = (event: Event) => {
    setEvents([...events, event]);
    // Show success message
  };

  const handleUpdate = (event: Event) => {
    setEvents(events.map(e => e.id === event.id ? event : e));
    // Show success message
  };

  const handleDelete = (eventId: string) => {
    setEvents(events.filter(e => e.id !== eventId));
    // Show success message
  };

  const handleInputChange = (field: keyof Event, value: string) => {
    if (currentEvent) {
      setCurrentEvent({ ...currentEvent, [field]: value });
    }
  };

  const handleSubmit = () => {
    if (currentEvent) {
      if (events.some(e => e.id === currentEvent.id)) {
        handleUpdate(currentEvent);
      } else {
        handleCreate(currentEvent);
      }
      setCurrentEvent(null);
    }
  };

  return (
    <div className="schedule-crud-panel">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={currentEvent?.title || ''}
          onChange={(e) => handleInputChange('title', e.target.value)}
          aria-label="Event Title"
        />
        <input
          type="date"
          value={currentEvent?.date || ''}
          onChange={(e) => handleInputChange('date', e.target.value)}
          aria-label="Event Date"
        />
        <input
          type="time"
          value={currentEvent?.time || ''}
          onChange={(e) => handleInputChange('time', e.target.value)}
          aria-label="Event Time"
        />
        <input
          type="text"
          placeholder="Location"
          value={currentEvent?.location || ''}
          onChange={(e) => handleInputChange('location', e.target.value)}
          aria-label="Event Location"
        />
        <textarea
          placeholder="Description"
          value={currentEvent?.description || ''}
          onChange={(e) => handleInputChange('description', e.target.value)}
          aria-label="Event Description"
        />
        <input
          type="text"
          placeholder="Participants"
          value={currentEvent?.participants || ''}
          onChange={(e) => handleInputChange('participants', e.target.value)}
          aria-label="Event Participants"
        />
        <button type="submit">Save Event</button>
      </form>
      <div className="event-list">
        {events.map(event => (
          <div key={event.id} className="event-item">
            <span>{event.title}</span>
            <button onClick={() => setCurrentEvent(event)}>Edit</button>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCRUDPanel;