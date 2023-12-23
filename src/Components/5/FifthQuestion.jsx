import { NavLink } from "react-router-dom";
import { Questions } from "../../Questions";
import { useState, useContext } from "react";
import { QuestionsContext } from "../../context/questionsContext";
import "./FifthQuestion.css";
const FirstQuestion = () => {
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
    if (selectedOption !== null) {
      if (selectedOption === Questions[4].ans) {
        setCount(count + 1);
      }
    }
  };
  return (
    <>
      <div className="mainContainer">
        <h1>{Questions[4].ques}</h1>
        <div className="answerContainer">
          <button
            className={buttonClass1}
            onClick={() => captureValue1("optionA")}
          >
            {Questions[4].optionA}
          </button>
          <button
            className={buttonClass2}
            onClick={() => captureValue2("optionB")}
          >
            {Questions[4].optionB}
          </button>
          <button
            className={buttonClass3}
            onClick={() => captureValue3("optionC")}
          >
            {Questions[4].optionC}
          </button>
          <button
            className={buttonClass4}
            onClick={() => captureValue4("optionD")}
          >
            {Questions[4].optionD}
          </button>
          <NavLink className="NextButton" to="/sixth" onClick={changeScore}>
            Next Question
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default FirstQuestion;
