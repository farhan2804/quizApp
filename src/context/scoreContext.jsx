// scoreContext.js
import React, { createContext, useState } from "react";

export const QuestionsContext = createContext({
  name: "",
  score: 0,
  resetScore: () => {},
});

export const QuestionsProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const resetScore = () => {
    setCount(0);
  };

  return (
    <QuestionsContext.Provider value={{ score: count, setCount, resetScore }}>
      {children}
    </QuestionsContext.Provider>
  );
};
