// components/DifficultyLabel.jsx
import React from 'react';
import '../index.css';

const DifficultyLabel = ({ difficulty }) => {
  let labelStyle;

  // Determine the style based on the difficulty level
  switch (difficulty) {
    case 'easy':
      labelStyle = 'difficulty easy';
      break;
    case 'medium':
      labelStyle = 'difficulty medium';
      break;
    case 'hard':
      labelStyle = 'difficulty hard';
      break;
    default:
      labelStyle = '';
  }

  return <div className={labelStyle}>{difficulty}</div>;
};

export default DifficultyLabel;
