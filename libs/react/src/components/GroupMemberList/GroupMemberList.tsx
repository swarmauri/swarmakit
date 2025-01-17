import React, { useState } from 'react';

interface Member {
  id: number;
  name: string;
}

interface GroupMemberListProps {
  members: Member[];
  initiallyExpanded?: boolean;
}

const GroupMemberList: React.FC<GroupMemberListProps> = ({ members, initiallyExpanded = false }) => {
  const [expanded, setExpanded] = useState(initiallyExpanded);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="group-member-list">
      <button onClick={toggleExpanded} aria-expanded={expanded} aria-controls="member-list">
        {expanded ? 'Collapse' : 'Expand'}
      </button>
      {expanded && (
        <ul id="member-list" role="list">
          {members.length > 0 ? (
            members.map((member) => <li key={member.id}>{member.name}</li>)
          ) : (
            <li>No members</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default GroupMemberList;