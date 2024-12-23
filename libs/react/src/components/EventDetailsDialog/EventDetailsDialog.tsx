import React, { useState } from 'react';
import './EventDetailsDialog.css';

interface EventDetails {
  title: string;
  description: string;
  participants: string[];
  location: string;
  time: string;
}

interface EventDetailsDialogProps {
  eventDetails: EventDetails;
  isOpen: boolean;
  isLoading: boolean;
  isError: boolean;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onDuplicate: () => void;
}

const EventDetailsDialog: React.FC<EventDetailsDialogProps> = ({
  eventDetails,
  isOpen,
  isLoading,
  isError,
  onClose,
  onEdit,
  onDelete,
  onDuplicate,
}) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        {isLoading ? (
          <div className="dialog-loading">Loading...</div>
        ) : isError ? (
          <div className="dialog-error">Error loading event details.</div>
        ) : (
          <>
            <h2>{eventDetails.title}</h2>
            <p>{eventDetails.description}</p>
            <p><strong>Participants:</strong> {eventDetails.participants.join(', ')}</p>
            <p><strong>Location:</strong> {eventDetails.location}</p>
            <p><strong>Time:</strong> {eventDetails.time}</p>
            <div className="dialog-actions">
              <button onClick={onEdit}>Edit</button>
              <button onClick={onDelete}>Delete</button>
              <button onClick={onDuplicate}>Duplicate</button>
              <button onClick={onClose}>Close</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EventDetailsDialog;