import React, { useState } from 'react';
import './DragAndDropScheduler.css';

interface Event {
  id: number;
  title: string;
  start: Date;
  end: Date;
  isDragging?: boolean;
}

interface DragAndDropSchedulerProps {
  events: Event[];
  onEventDrop: (event: Event, newStart: Date, newEnd: Date) => void;
  onEventResize: (event: Event, newEnd: Date) => void;
}

const DragAndDropScheduler: React.FC<DragAndDropSchedulerProps> = ({ events, onEventDrop, onEventResize }) => {
  const [draggingEvent, setDraggingEvent] = useState<Event | null>(null);

  const handleDragStart = (event: Event) => {
    setDraggingEvent(event);
  };

  const handleDragEnd = () => {
    if (draggingEvent) {
      const newStart = new Date(); // Placeholder for the new start time logic
      const newEnd = new Date(); // Placeholder for the new end time logic
      onEventDrop(draggingEvent, newStart, newEnd);
      setDraggingEvent(null);
    }
  };

  const handleResize = (event: Event, newEnd: Date) => {
    onEventResize(event, newEnd);
  };

  return (
    <div className="scheduler">
      {events.map((event) => (
        <div
          key={event.id}
          className={`event ${event.isDragging ? 'dragging' : ''}`}
          draggable
          onDragStart={() => handleDragStart(event)}
          onDragEnd={handleDragEnd}
          style={{ left: event.start.getHours() * 50, width: (event.end.getHours() - event.start.getHours()) * 50 }}
        >
          {event.title}
        </div>
      ))}
    </div>
  );
};

export default DragAndDropScheduler;