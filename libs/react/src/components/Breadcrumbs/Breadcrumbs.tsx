import React from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  maxItems?: number;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, maxItems = 5 }) => {
  const displayItems = items.length > maxItems ? items.slice(0, maxItems) : items;

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {displayItems.map((item, index) => (
          <li key={index} className={`breadcrumb-item${item.isActive ? ' active' : ''}`}>
            {item.href && !item.isActive ? (
              <a href={item.href}>{item.label}</a>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
        {items.length > maxItems && <li className="breadcrumb-item">...</li>}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;