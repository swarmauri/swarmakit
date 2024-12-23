import React, { useState } from 'react';
import './MediaCard.css';

interface MediaCardProps {
  title: string;
  description: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  caption?: string;
  expandable?: boolean;
}

const MediaCard: React.FC<MediaCardProps> = ({ title, description, mediaUrl, mediaType, caption, expandable }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    if (expandable) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className={`media-card ${isExpanded ? 'media-card-expanded' : ''}`}>
      <div className="media-card-media" onClick={toggleExpand}>
        {mediaType === 'image' ? (
          <img src={mediaUrl} alt={caption || 'Media content'} className="media-card-image" />
        ) : (
          <video controls className="media-card-video">
            <source src={mediaUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {caption && <div className="media-card-caption">{caption}</div>}
      </div>
      <div className="media-card-content">
        <div className="media-card-title">{title}</div>
        <div className="media-card-description">{description}</div>
      </div>
    </div>
  );
};

export default MediaCard;