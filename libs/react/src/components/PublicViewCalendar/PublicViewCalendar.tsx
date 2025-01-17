import React, { useState } from 'react';
import './PublicViewCalendar.css';

interface Event {
  id: string;
  title: string;
  category: string;
  location: string;
  time: string;
  description: string;
}

interface PublicViewCalendarProps {
  events: Event[];
}

const PublicViewCalendar: React.FC<PublicViewCalendarProps> = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [filter, setFilter] = useState<string>('');

  const filteredEvents = events.filter(
    (event) =>
      event.category.includes(filter) || event.location.includes(filter)
  );

  return (
    <div className="calendar-container">
      <div className="filter-section">
        <input
          type="text"
          placeholder="Filter by category or location"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="events-list">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="event-item"
            onClick={() => setSelectedEvent(event)}
          >
            <h3>{event.title}</h3>
            <p>{event.time}</p>
          </div>
        ))}
      </div>
      {selectedEvent && (
        <div className="event-details">
          <h2>{selectedEvent.title}</h2>
          <p>{selectedEvent.description}</p>
          <p><strong>Category:</strong> {selectedEvent.category}</p>
          <p><strong>Location:</strong> {selectedEvent.location}</p>
          <button onClick={() => setSelectedEvent(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default PublicViewCalendar;