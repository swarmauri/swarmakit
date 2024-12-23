import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  content: string;
  isOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, content, isOpen = false }) => {
  const [open, setOpen] = useState(isOpen);

  const toggleAccordion = () => {
    setOpen(!open);
  };

  return (
    <div className="accordion">
      <button
        className="accordion-title"
        onClick={toggleAccordion}
        aria-expanded={open}
        aria-controls="accordion-content"
      >
        {title}
      </button>
      {open && (
        <div id="accordion-content" className="accordion-content">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;