// GroupMemberList.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './GroupMemberList.css';

const GroupMemberList = ({ members }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`group-member-list ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      {isExpanded && (
        <ul>
          {members.length > 0 ? (
            members.map((member, index) => <li key={index}>{member}</li>)
          ) : (
            <li>No members</li>
          )}
        </ul>
      )}
    </div>
  );
};

GroupMemberList.propTypes = {
  members: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GroupMemberList;