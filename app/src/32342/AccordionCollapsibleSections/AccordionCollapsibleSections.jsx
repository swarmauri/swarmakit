import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AccordionCollapsibleSections.css';

const AccordionCollapsibleSections = ({ sections }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (label) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

  return (
    <div className="accordion">
      {sections.map((section) => (
        <div key={section.label} className="accordion-section">
          <div
            className="accordion-header"
            onClick={() => toggleSection(section.label)}
          >
            {section.label}
          </div>
          {openSections[section.label] && (
            <div className="accordion-content">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

AccordionCollapsibleSections.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

AccordionCollapsibleSections.defaultProps = {
  sections: [],
};

export default AccordionCollapsibleSections;