import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { QuestionsContext } from "../../context/scoreContext";
import { useQuestions } from "../../context/questionsContext";
import "./LastPage.css";

const LastPage = () => {
  const questionsData = useQuestions();
  const { name, count, resetScore } = useContext(QuestionsContext);
  const [showAnswers, setShowAnswers] = useState(false);

  const showDetail = () => {
    setShowAnswers(true);
  };

  const restartQuiz = () => {
    resetScore(); // Reset the score when restarting the quiz
    setShowAnswers(false); // Hide the answers view
  };

  return (
    <>
      <div className="scoreContainer">
        <h1>
          {name} your Score is {count}
        </h1>
        <button onClick={showDetail} className="detailButton">
          Click to Check answers
        </button>
      </div>

      {showAnswers && (
        <div className="answerView">
          <h2 className="ansHeading">Answers:</h2>
          {questionsData.map((question, index) => (
            <div key={index}>
              <p id="ques">{question.ques}</p>
              <p id="ans1">{question.optionA}</p>
              <p id="ans2">{question.optionB}</p>
              <p id="ans3">{question.optionC}</p>
              <p id="ans4">{question.optionD}</p>
              <h3 className="ansCorrect">Correct Answer: {question.ans}</h3>
            </div>
          ))}

          <NavLink className="restartButton" to="/" onClick={restartQuiz}>
            Retake Quiz
          </NavLink>
        </div>
      )}
    </>
  );
};

export default LastPage;
