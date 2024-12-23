import React, { useState } from 'react';
import './AdminViewScheduler.css';

interface Event {
  id: string;
  title: string;
  category: string;
  location: string;
  time: string;
  description: string;
}

interface AdminViewSchedulerProps {
  initialEvents: Event[];
}

const AdminViewScheduler: React.FC<AdminViewSchedulerProps> = ({ initialEvents }) => {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [newEvent, setNewEvent] = useState<Event>({
    id: '',
    title: '',
    category: '',
    location: '',
    time: '',
    description: '',
  });

  const handleAddEvent = () => {
    setEvents([...events, { ...newEvent, id: String(Date.now()) }]);
    setNewEvent({ id: '', title: '', category: '', location: '', time: '', description: '' });
  };

  const handleEditEvent = (updatedEvent: Event) => {
    setEvents(events.map(event => (event.id === updatedEvent.id ? updatedEvent : event)));
    setSelectedEvent(null);
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter(event => event.id !== eventId));
    setSelectedEvent(null);
  };

  return (
    <div className="scheduler-container">
      <div className="event-form">
        <input
          type="text"
          placeholder="Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={newEvent.category}
          onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={newEvent.location}
          onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="Time"
          value={newEvent.time}
          onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-item" onClick={() => setSelectedEvent(event)}>
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
          <button onClick={() => handleEditEvent(selectedEvent)}>Edit</button>
          <button onClick={() => handleDeleteEvent(selectedEvent.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default AdminViewScheduler;