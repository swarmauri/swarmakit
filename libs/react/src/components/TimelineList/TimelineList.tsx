import React from 'react';

interface TimelineItem {
  label: string;
  content: React.ReactNode;
  completed?: boolean;
}

interface TimelineListProps {
  items: TimelineItem[];
  activeIndex: number;
}

const TimelineList: React.FC<TimelineListProps> = ({ items, activeIndex }) => {
  return (
    <div className="timeline-list">
      {items.map((item, index) => (
        <div
          key={index}
          className={`timeline-item ${index === activeIndex ? 'active' : ''} ${item.completed ? 'completed' : ''}`}
        >
          <div className="timeline-label">{item.label}</div>
          <div className="timeline-content">{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default TimelineList;