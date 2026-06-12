import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: "This is a sample text 1" },
    { id: 2, text: "This is a sample text 2" },
    { id: 3, text: "This is a sample text 3" },
  ]);

  return (
    <FeedbackContext.Provider value={{ feedback, setFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;