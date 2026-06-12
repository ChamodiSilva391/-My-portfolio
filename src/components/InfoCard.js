import React from 'react';
import './InfoCard.css';

// 💡 Practical 05 එකේ props & children demonstration එකට හදපු advanced card component එක
export default function InfoCard({ title, category, badgeColor = 'var(--accent)', children }) {
  return (
    <div className="info-card">
      <div className="info-card__header">
        <span className="info-card__badge" style={{ backgroundColor: badgeColor }}>
          {category}
        </span>
        <h4 className="info-card__title">{title}</h4>
      </div>
      <div className="info-card__body">
        {children}
      </div>
    </div>
  );
}
