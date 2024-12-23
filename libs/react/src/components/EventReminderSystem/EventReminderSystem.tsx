import React, { useState } from 'react';
import './EventReminderSystem.css';

interface Reminder {
  eventId: string;
  reminderTime: string;
  deliveryMethod: 'Email' | 'SMS' | 'Push Notification';
}

interface Event {
  id: string;
  title: string;
  date: string;
}

const EventReminderSystem: React.FC = () => {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [reminderTime, setReminderTime] = useState<string>('');
  const [deliveryMethod, setDeliveryMethod] = useState<'Email' | 'SMS' | 'Push Notification'>('Email');

  const handleSetReminder = () => {
    if (selectedEvent) {
      const newReminder: Reminder = {
        eventId: selectedEvent.id,
        reminderTime,
        deliveryMethod,
      };
      setReminders([...reminders, newReminder]);
      // Show success message
    }
  };

  const handleCancelReminder = (eventId: string) => {
    setReminders(reminders.filter(reminder => reminder.eventId !== eventId));
    // Show success message
  };

  return (
    <div className="event-reminder-system">
      <div className="event-selection">
        <select onChange={(e) => setSelectedEvent(JSON.parse(e.target.value))}>
          <option value="">Select Event</option>
          {/* Event options should be dynamically loaded */}
        </select>
      </div>
      <div className="reminder-settings">
        <input
          type="text"
          placeholder="Reminder Time (e.g., 1 hour)"
          value={reminderTime}
          onChange={(e) => setReminderTime(e.target.value)}
          aria-label="Reminder Time"
        />
        <select
          value={deliveryMethod}
          onChange={(e) => setDeliveryMethod(e.target.value as 'Email' | 'SMS' | 'Push Notification')}
          aria-label="Delivery Method"
        >
          <option value="Email">Email</option>
          <option value="SMS">SMS</option>
          <option value="Push Notification">Push Notification</option>
        </select>
        <button onClick={handleSetReminder}>Set Reminder</button>
      </div>
      <div className="reminder-list">
        {reminders.map(reminder => (
          <div key={reminder.eventId} className="reminder-item">
            <span>{reminder.reminderTime} before event via {reminder.deliveryMethod}</span>
            <button onClick={() => handleCancelReminder(reminder.eventId)}>Cancel</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventReminderSystem;