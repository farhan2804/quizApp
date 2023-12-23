import React, { useContext, useState } from "react";
import { QuestionsContext } from "../../context/questionsContext";
import { Questions } from "../../Questions";
import './LastPage.css';

const LastPage = ({ count }) => {
  const Uname = useContext(QuestionsContext);
  const [showAnswers, setShowAnswers] = useState(false);

  const showDetail = () => {
    setShowAnswers(true);
  };

  return (
    <>
    <div className="scoreContainer">
      <h1>
        {Uname.name} your Score is {Uname.count}
      </h1>
      <button onClick={showDetail} className="detailButton">
        Click to Check answers
      </button>
      </div>

      {showAnswers && (
        <div className="answerView">
          <h2 className="ansHeading">Answers:</h2>
          {Questions.map((question, index) => (
            <div key={index}>
              <p id="ques">{question.ques}</p>
              <p id="ans1">{question.optionA}</p>
              <p id="ans2">{question.optionB}</p>
              <p id="ans3">{question.optionC}</p>
              <p id="ans4">{question.optionD}</p>
              <h3 className="ansCorrect">Correct Answer: {question.ans}</h3>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default LastPage;
