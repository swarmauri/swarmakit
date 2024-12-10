import React, { useState } from 'react';

interface BreadcrumbItem {
  label: string;
  dropdownItems?: string[];
}

interface BreadcrumbWithDropdownsProps {
  items: BreadcrumbItem[];
}

const BreadcrumbWithDropdowns: React.FC<BreadcrumbWithDropdownsProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              {item.label}
            </button>
            {item.dropdownItems && openIndex === index && (
              <ul className="dropdown" role="menu">
                {item.dropdownItems.map((dropdownItem, idx) => (
                  <li key={idx} role="menuitem">
                    {dropdownItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadcrumbWithDropdowns;