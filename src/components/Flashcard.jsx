import React from 'react';

const Flashcard = ({ card, showAnswer, toggleShowAnswer }) => {
  return (
    <div className="flashcard-container" onClick={toggleShowAnswer}>
      <div className={`flashcard ${showAnswer ? 'flip' : ''}`}>
        <div className="front">
          <div className="content">{card.question}</div>
        </div>
        <div className="back">
          <div className="content">{card.answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
