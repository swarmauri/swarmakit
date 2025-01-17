import React from 'react';
import './Timeline.css';

interface TimelineItem {
  time: string;
  content: React.ReactNode;
}

interface TimelineProps {
  state: 'visible' | 'hidden' | 'populated' | 'empty';
  events: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ state, events }) => {
  return (
    <div className={`timeline ${state}`} aria-hidden={state === 'hidden'}>
      {state === 'empty' ? (
        <div className="timeline-empty">No events to display</div>
      ) : (
        events.map((event, index) => (
          <div key={index} className="timeline-event">
            <div className="timeline-time">{event.time}</div>
            <div className="timeline-content">{event.content}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default Timeline;