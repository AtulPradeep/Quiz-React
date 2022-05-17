import React, { useState } from "react";
import "./CSS/Quizcomp.css";

export default function Currentnews() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Intersolar Europe conference will take place in which country??",
      options: [
        { id: 0, text: "India", isCorrect: false },
        { id: 1, text: "Canada", isCorrect: false },
        { id: 2, text: "USA", isCorrect: false },
        { id: 3, text: "Germany", isCorrect: true },
      ],
    },
    {
      text: "Which country has been elected as the new Chair of the AAEA for 2022-2024??",
      options: [
        { id: 0, text: "India", isCorrect: true },
        { id: 1, text: "Germany", isCorrect: false },
        { id: 2, text: "Iceland", isCorrect: false },
        { id: 3, text: "USA", isCorrect: false },
      ],
    },
    {
      text: "Who is the swimmer to win 8 gold medal in single Olympics",
      options: [
        { id: 0, text: "Michel Phelps", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Rochin", isCorrect: false },
      ],
    },
    {
      text: "Which country became the first Asian country to join in NATO Cooperative Cyber Defence Centre of Excellence?",
      options: [
        { id: 0, text: "India", isCorrect: false },
        { id: 1, text: "South Korea", isCorrect: true },
        { id: 2, text: "Bangladesh", isCorrect: false },
        { id: 3, text: "China", isCorrect: false },
      ],
    },
    {
      text: "	'Katalin Novak' has elected as the first female and youngest President of which country?",
      options: [
        { id: 0, text: "Poland", isCorrect: false },
        { id: 1, text: "Hungary", isCorrect: true },
        { id: 2, text: "England", isCorrect: true },
        { id: 3, text: "NewZeland", isCorrect: false },
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
