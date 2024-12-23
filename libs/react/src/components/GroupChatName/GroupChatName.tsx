import React from 'react';

interface GroupChatNameProps {
  name: string;
  isVisible: boolean;
  isEdited: boolean;
}

const GroupChatName: React.FC<GroupChatNameProps> = ({ name, isVisible, isEdited }) => {
  return (
    <div className={`group-chat-name ${isVisible ? 'displayed' : 'hidden'} ${isEdited ? 'edited' : ''}`} aria-label={isVisible ? `Chat name: ${name}` : 'Chat name hidden'}>
      {isVisible && <span>{name}{isEdited && '*'}</span>}
    </div>
  );
};

export default GroupChatName;