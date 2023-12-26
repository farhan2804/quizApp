import React from "react";
import FrontPage from "./Components/0_FrontPage/FrontPage";
// import Questions from "./Components/Questions";
import { QuestionsProvider } from "./context/questionsContext";
import "./App.css";

const App = () => {
  return (
    <>
      <QuestionsProvider>
        <FrontPage />
      </QuestionsProvider>
      {/* <Questions/> */}
    </>
  );
};

export default App;
