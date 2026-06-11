import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

const App = () => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: "This is a sample text 1" },
    { id: 2, text: "This is a sample text 2" },
    { id: 3, text: "This is a sample text 3" },
  ]);

  const [darkMode, setDarkMode] = useState(false); // Darkmode -> Light Mode

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const addFeedback = (text) => {
    const newFeedback = {
      id: Date.now(),
      text,
    };
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />

      <div className="container">
        <FeedbackForm addFeedback={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          handleDelete={deleteFeedback}
        />
      </div>
    </div>
  );
};

export default App;