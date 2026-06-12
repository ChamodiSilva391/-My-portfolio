import React from 'react';
import './TitleBox.css';

// 💡 Practical 03 එකේ styling practical එකට හදපු TitleBox component එක
export default function TitleBox({ text = "This is the title" }) {
  return (
    <div className="titleBox-container">
      <div className="titleBox">
        <span>{text}</span>
      </div>
    </div>
  );
}
