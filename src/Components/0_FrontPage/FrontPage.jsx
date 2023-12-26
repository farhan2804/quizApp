import React, { useState } from "react";
import "./FrontPage.css";
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import FirstQuestion from "../1/FirstQuestion";
import SecondQues from "../2/SecondQues";
import ThirdQuestion from "../3/ThirdQuestion";
import FourthQuestion from "../4/FourthQuestion";
import FifthQuestion from "../5/FifthQuestion";
import SixthQuestion from "../6/SixthQuestion";
import SeventhQuestion from "../7/SeventhQuestion";
import EightQuestion from "../8/EigthQuestion";
import NinthQuestion from "../9/NinthQuestion";
import TenthQues from "../10/TenthQues";
import LastPage from "../LastPage/LastPage";
import { QuestionsContext } from "../../context/scoreContext";

const FrontPage = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const captureName = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <QuestionsContext.Provider value={{ name, setCount, count, setCount }}>
        <Routes>
          <Route
            path="/"
            element={
              <div className="MainContainer">
                <h1 className="quizHeading"> React Quiz App</h1>
                <h3 className="userName">Enter your Name:</h3>
                <div className="SubContainer">
                  <input
                    id="nameField"
                    onChange={captureName}
                    type="text"
                  ></input>
                  <NavLink className="startButton" to="/first">
                    Start Quiz
                  </NavLink>
                </div>
              </div>
            }
          />
          <Route exact path="/" element={<FrontPage />} />
          <Route exact path="/first" element={<FirstQuestion />} />
          <Route exact path="/second" element={<SecondQues />} />
          <Route exact path="/third" element={<ThirdQuestion />} />
          <Route exact path="/fourth" element={<FourthQuestion />} />
          <Route exact path="/fifth" element={<FifthQuestion />} />
          <Route exact path="/sixth" element={<SixthQuestion />} />
          <Route exact path="/seventh" element={<SeventhQuestion />} />
          <Route exact path="/eigth" element={<EightQuestion />} />
          <Route exact path="/ninth" element={<NinthQuestion />} />
          <Route exact path="/tenth" element={<TenthQues />} />
          <Route exact path="/last" element={<LastPage />} />
        </Routes>
      </QuestionsContext.Provider>
    </>
  );
};
export default FrontPage;
