import React from 'react';
import './Content.css';

// 💡 Practical 03 එකේ content layout එකට හදපු Content component එක
export default function Content({ children }) {
  return (
    <div className="content-container">
      <p className="content-paragraph">
        {children || "This is the default content paragraph. It contains the description of the component styling rules applied from Content.css."}
      </p>
    </div>
  );
}
