import React, { useState, useEffect } from 'react';
import './index.css';
import Flashcard from './components/flashcard';
import DifficultyLabel from './components/DifficultyLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const App = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [guess, setGuess] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [cardOrder, setCardOrder] = useState([]);
  const [feedback, setFeedback] = useState(''); // To show feedback

  // Array of flashcards
  const cards = [
    {
      question: 'What is the symbol for speed?',
      answer: 'v',
      difficulty: 'easy',
    },
    {
      question: 'What is the SI unit of force?',
      answer: 'newton',
      difficulty: 'easy',
    },
    {
      question: 'What is the symbol for wavelength?',
      answer: 'λ',
      difficulty: 'easy',
    },
    {
      question: 'What is the unit of frequency?',
      answer: 'hertz',
      difficulty: 'easy',
    },
    {
      question: 'What is the symbol for time?',
      answer: 't',
      difficulty: 'easy',
    },
    {
      question: 'What is the SI unit for mass?',
      answer: 'kilogram',
      difficulty: 'easy',
    },
    {
      question: 'What is the charge of an electron?',
      answer: 'negative',
      difficulty: 'medium',
    },
    {
      question: 'What is the symbol for gravitational constant?',
      answer: 'G',
      difficulty: 'medium',
    },
    {
      question: 'What is the unit of energy?',
      answer: 'joule',
      difficulty: 'easy',
    },
    {
      question: 'What is the symbol for acceleration due to gravity?',
      answer: 'g',
      difficulty: 'easy',
    },
  ];

  useEffect(() => {
    const randomOrder = [...Array(cards.length).keys()].sort(
      () => Math.random() - 0.5
    );
    setCardOrder(randomOrder);
  }, []);

  // Function to display a random card
  const showNextCard = async (direction) => {
    if (showAnswer) {
      setShowAnswer(false);
      await sleep(500);
    }

    setErrorMessage(''); // Clear the error message
    let nextIndex = currentCard + direction;

    // Keep the index in bounds
    if (nextIndex >= cards.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = cards.length - 1;

    setCurrentCard(nextIndex);
    setShowAnswer(false);
    setFeedback('');
    setGuess(''); // Clear the guess input
  };

  const handleSubmitGuess = () => {
    console.log(1);
    if (guess.trim() === '') {
      setFeedback('Please enter your guess!');
      return;
    }

    // Case-insensitive comparison
    if (guess.toLowerCase() === cards[currentCard].answer.toLowerCase()) {
      setFeedback('Correct!');
    } else {
      setFeedback(`Wrong! The correct answer is: ${cards[currentCard].answer}`);
    }
    setShowAnswer(true);
  };

  return (
    <>
      <h1>Flashcard Study Tool</h1>
      <div className="app">
        <h2>Physics Flashcards</h2>
        <p>Total Cards: {cards.length}</p>
        <p className="description">
          This flashcard set is designed to help students grasp fundamental
          concepts related to oscillatory motion and wave phenomena in physics.
          Through a series of carefully crafted questions and answers, users
          will explore key topics such as simple harmonic motion, wave speed,
          resonance, and the principles governing various types of waves.
        </p>
        <DifficultyLabel difficulty={cards[currentCard].difficulty} />
        <Flashcard
          card={cards[currentCard]}
          showAnswer={showAnswer}
          toggleShowAnswer={() => setShowAnswer(!showAnswer)}
        />

        <input
          type="text"
          placeholder="Enter your guess"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="guess-input"
        />

        {feedback && <p className="error">{feedback}</p>}

        <div className="button-group">
          <button onClick={() => showNextCard(-1)}>
            <FontAwesomeIcon icon={faArrowLeft} /> Previous
          </button>

          <button onClick={handleSubmitGuess}>Submit</button>

          <button onClick={() => showNextCard(1)}>
            Next <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
