import React, { useState } from 'react';
import './index.css';
import Flashcard from './components/flashcard';
import DifficultyLabel from './components/DifficultyLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const App = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // Array of flashcards
  const cards = [
    {
      question: 'What is simple harmonic motion (SHM)?',
      answer:
        'A type of oscillatory motion where the restoring force is proportional to the displacement and acts in the opposite direction.',
      difficulty: 'easy',
    },
    {
      question: 'What is the formula for the period of a pendulum?',
      answer:
        'T = 2π√(L/g), where T is the period, L is the length of the pendulum, and g is the acceleration due to gravity.',
      difficulty: 'medium',
    },
    {
      question: 'What is resonance in oscillatory systems?',
      answer:
        'Resonance occurs when the frequency of external force matches the natural frequency of the system, leading to large amplitude oscillations.',
      difficulty: 'hard',
    },
    {
      question: 'What is the equation for the wave speed?',
      answer:
        'Wave speed (v) is given by v = fλ, where f is the frequency and λ is the wavelength.',
      difficulty: 'easy',
    },
    {
      question: 'What is damping in oscillations?',
      answer:
        'Damping is the gradual loss of amplitude in an oscillatory system due to resistive forces like friction or air resistance.',
      difficulty: 'medium',
    },
    {
      question: 'What is the principle of superposition?',
      answer:
        'The principle of superposition states that when two or more waves overlap, the resultant displacement is the algebraic sum of the displacements of individual waves.',
      difficulty: 'medium',
    },
    {
      question:
        'What is the difference between transverse and longitudinal waves?',
      answer:
        'In transverse waves, particles move perpendicular to the direction of wave propagation, while in longitudinal waves, particles move parallel to the direction of wave propagation.',
      difficulty: 'hard',
    },
    {
      question: 'What is a standing wave?',
      answer:
        'A standing wave is a wave pattern formed when two waves of the same frequency and amplitude travel in opposite directions and interfere, resulting in nodes and antinodes.',
      difficulty: 'medium',
    },
    {
      question: 'What is the formula for the angular frequency of SHM?',
      answer:
        'The angular frequency (ω) is given by ω = 2πf, where f is the frequency of oscillation.',
      difficulty: 'easy',
    },
    {
      question: 'What is the wave equation?',
      answer:
        'The wave equation is a second-order partial differential equation: ∂²y/∂t² = v²∂²y/∂x², describing how waves propagate through a medium.',
      difficulty: 'hard',
    },
  ];

  // Function to display a random card
  const showNextCard = async () => {
    if (showAnswer) {
      setShowAnswer(false); // First hide the answer
      console.log('Hiding answer');
      // delay the next card by 1 second
      await sleep(500);
    }
    let randomIndex = Math.floor(Math.random() * cards.length);
    while (randomIndex === currentCard) {
      randomIndex = Math.floor(Math.random() * cards.length);
    }
    console.log(randomIndex);

    setCurrentCard(randomIndex);
    setShowAnswer(false); // Reset to show the question
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
        <button onClick={showNextCard}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </>
  );
};

export default App;
