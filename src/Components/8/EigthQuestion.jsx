import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { useQuestions } from "../../context/questionsContext";
import { QuestionsContext } from "../../context/scoreContext";
import "./EigthQuestion.css";

const FirstQuestion = () => {
  const questionsData = useQuestions();
  const [selectedOption, setSelectedOption] = useState(null);
  const [buttonClass1, setButtonClass1] = useState("original");
  const [buttonClass2, setButtonClass2] = useState("original");
  const [buttonClass3, setButtonClass3] = useState("original");
  const [buttonClass4, setButtonClass4] = useState("original");
  const { count, setCount } = useContext(QuestionsContext);

  const captureValue1 = (option) => {
    setSelectedOption(option);
    setButtonClass1("buttonClicked");
    setButtonClass2("original");
    setButtonClass3("original");
    setButtonClass4("original");
  };
  const captureValue2 = (option) => {
    setSelectedOption(option);
    setButtonClass1("original");
    setButtonClass2("buttonClicked");
    setButtonClass3("original");
    setButtonClass4("original");
  };
  const captureValue3 = (option) => {
    setSelectedOption(option);
    setButtonClass1("original");
    setButtonClass2("original");
    setButtonClass3("buttonClicked");
    setButtonClass4("original");
  };
  const captureValue4 = (option) => {
    setSelectedOption(option);
    setButtonClass1("original");
    setButtonClass2("original");
    setButtonClass3("original");
    setButtonClass4("buttonClicked");
  };
  const changeScore = () => {
    if (selectedOption !== null && questionsData.length > 0) {
      if (selectedOption === questionsData[7].ans) {
        setCount(count + 1);
      }
    }
  };

  return (
    <>
      <div className="mainContainer">
        {questionsData.length > 0 ? (
          <h1>{questionsData[7].ques}</h1>
        ) : (
          <p>Loading...</p>
        )}
        <div className="answerContainer">
          <button
            className={buttonClass1}
            onClick={() => captureValue1("optionA")}
          >
            {questionsData.length > 0 && questionsData[7].optionA}
          </button>
          <button
            className={buttonClass2}
            onClick={() => captureValue2("optionB")}
          >
            {questionsData.length > 0 && questionsData[7].optionB}
          </button>
          <button
            className={buttonClass3}
            onClick={() => captureValue3("optionC")}
          >
            {questionsData.length > 0 && questionsData[7].optionC}
          </button>
          <button
            className={buttonClass4}
            onClick={() => captureValue4("optionD")}
          >
            {questionsData.length > 0 && questionsData[7].optionD}
          </button>
          <NavLink className="NextButton" to="/ninth" onClick={changeScore}>
            Next Question
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default FirstQuestion;
