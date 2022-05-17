import React from "react";
import { useState } from "react";
import "./CSS/Quizcomp.css";

export default function Moviequiz() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What was the first feature-length animated movie ever released?",
      options: [
        { id: 0, text: "Frozen", isCorrect: false },
        { id: 1, text: "Secret seven", isCorrect: false },
        { id: 2, text: "Parakkum thalika", isCorrect: false },
        { id: 3, text: "Snow White and the Seven Dwarfs", isCorrect: true },
      ],
    },
    {
      text: "Indian song to win Oscar?",
      options: [
        { id: 0, text: "Jai ho", isCorrect: true },
        { id: 1, text: "Babuetta", isCorrect: false },
        { id: 2, text: "Subha hone", isCorrect: false },
        { id: 3, text: "Aliyambal", isCorrect: false },
      ],
    },
    {
      text: "Who played Juror Number 8 in 12 Angry Men?",
      options: [
        { id: 0, text: "Henry Fonda", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Richardson", isCorrect: false },
      ],
    },
    {
      text: " Which US actor is the voice of Gru in the 2010 animated film ‘Despicable Me’?",
      options: [
        { id: 0, text: " Leonardo de", isCorrect: false },
        { id: 1, text: "Steve Carell", isCorrect: true },
        { id: 2, text: "Micheal frank", isCorrect: false },
        { id: 3, text: "Suman Desai", isCorrect: false },
      ],
    },
    {
      text: "In the Harry Potter series of books what is the name of the driver of the Knight Bus??",
      options: [
        { id: 0, text: "Dumbledoor", isCorrect: false },
        { id: 1, text: "Ernie Prang", isCorrect: true },
        { id: 2, text: "Christina", isCorrect: true },
        { id: 3, text: "Inia Gostelae", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>Sports Quiz </h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
