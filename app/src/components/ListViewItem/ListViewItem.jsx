import React from 'react';
import PropTypes from 'prop-types';
import './ListViewItem.css';

const ListViewItem = ({ title, subtitle, icon, onClick }) => {
  return (
    <div className="list-view-item" onClick={onClick}>
      {icon && <div className="list-view-item-icon">{icon}</div>}
      <div className="list-view-item-content">
        <h3 className="list-view-item-title">{title}</h3>
        {subtitle && <p className="list-view-item-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

ListViewItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func.isRequired,
};

export default ListViewItem;