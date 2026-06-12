import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
// import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackContext from "./context/FeedbackContext";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {
  // const [feedback, setFeedback] = useState([
  //   { id: 1, text: "This is a sample text 1" },
  //   { id: 2, text: "This is a sample text 2" },
  //   { id: 3, text: "This is a sample text 3" },
  // ]);

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  // const addFeedback = (text) => {
  //   const newFeedback = {
  //     id: Date.now(),
  //     text,
  //   };

  //   setFeedback([newFeedback, ...feedback]);
  // };

  // const deleteFeedback = (id) => {
  //   if (window.confirm("Are you sure?")) {
  //     setFeedback(feedback.filter((item) => item.id !== id));
  //   }
  // };

  return (
    <FeedbackProvider>
      <div className={darkMode ? "app dark" : "app"}>
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />

        <div className="container">
          
          <FeedbackForm  />

          {/* <FeedbackStats  /> */}
          <FeedbackList />
        
        </div>
      </div>
    </FeedbackProvider>
  );
};

export default App;