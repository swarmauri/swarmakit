import React, { useState } from 'react';

interface ListItem {
  id: number;
  name: string;
}

interface Group {
  id: number;
  name: string;
  items: ListItem[];
}

interface GroupedListProps {
  groups: Group[];
}

const GroupedList: React.FC<GroupedListProps> = ({ groups }) => {
  const [expandedGroups, setExpandedGroups] = useState<Set<number>>(new Set());
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const toggleGroup = (groupId: number) => {
    const newExpandedGroups = new Set(expandedGroups);
    if (newExpandedGroups.has(groupId)) {
      newExpandedGroups.delete(groupId);
    } else {
      newExpandedGroups.add(groupId);
    }
    setExpandedGroups(newExpandedGroups);
  };

  const selectItem = (itemId: number) => {
    setSelectedItem(itemId);
  };

  return (
    <div className="grouped-list">
      {groups.map(group => (
        <div key={group.id} className="group">
          <div
            className="group-header"
            onClick={() => toggleGroup(group.id)}
            aria-expanded={expandedGroups.has(group.id)}
          >
            {group.name}
          </div>
          {expandedGroups.has(group.id) && (
            <ul>
              {group.items.map(item => (
                <li
                  key={item.id}
                  className={`list-item ${selectedItem === item.id ? 'selected' : ''}`}
                  onMouseEnter={() => selectItem(item.id)}
                  onMouseLeave={() => selectItem(null)}
                  onClick={() => selectItem(item.id)}
                  aria-selected={selectedItem === item.id}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default GroupedList;