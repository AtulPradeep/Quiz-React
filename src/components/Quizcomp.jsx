import React, { useState } from "react";
import "./CSS/Quizcomp.css";

export default function Quizcomp() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Player to score highest run scorer in ODI cricket?",
      options: [
        { id: 0, text: "Ricky Ponting", isCorrect: false },
        { id: 1, text: "Vivan Richards", isCorrect: false },
        { id: 2, text: "Sachin Tendulkar", isCorrect: false },
        { id: 3, text: "Rohit Sharma", isCorrect: true },
      ],
    },
    {
      text: "Cristiano Ronaldo plays for which country?",
      options: [
        { id: 0, text: "Portugal", isCorrect: true },
        { id: 1, text: "Spain", isCorrect: false },
        { id: 2, text: "Malta", isCorrect: false },
        { id: 3, text: "Brazil", isCorrect: false },
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
      text: "Who won Bundesliga 2022",
      options: [
        { id: 0, text: " RB Leipzig", isCorrect: false },
        { id: 1, text: "Bayern Munich", isCorrect: true },
        { id: 2, text: "Hertha BSC", isCorrect: false },
        { id: 3, text: "Dortmund", isCorrect: false },
      ],
    },
    {
      text: "Who won 2011 cricket world cup?",
      options: [
        { id: 0, text: "Pakistan", isCorrect: false },
        { id: 1, text: "India", isCorrect: true },
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
