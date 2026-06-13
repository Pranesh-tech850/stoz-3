import React, { useState, useContext,useEffect } from "react";
import Card from "./sharder/Card";
import FeedbackContext from "../context/FeedbackContext";
import ThemeContext from "../context/ThemeContext";
import Button from "./sharder/Button";

const FeedbackForm = () => {
  const { addFeedback,editFeedback,updateFeedback} = useContext(FeedbackContext);
  const { darkMode } = useContext(ThemeContext);

  const [text, setText] = useState("");
  const [btnDisable, setBtnDisable] = useState(true);
  const [message, setMessage] = useState("");
   useEffect(() => {
  if (editFeedback.edit === true) {
    setText(editFeedback.item.text);
    setBtnDisable(false);
    }
}, [editFeedback]);

 const handleSubmit = (e) => {
  e.preventDefault();

  if (text.trim().length < 10) return;

  if (editFeedback.edit) {
    updateFeedback(editFeedback.item.id, {
      text,
    });
  } else {
    addFeedback(text);
  }

  setText("");
  setBtnDisable(true);
  setMessage("");
};

  const handleTextChange = (e) => {
    const value = e.target.value;

    setText(value);

    if (value.trim().length === 0) {
      setBtnDisable(true);
      setMessage("");
    } else if (value.trim().length < 10) {
      setBtnDisable(true);
      setMessage("Character must be at least 10");
    } else {
      setBtnDisable(false);
      setMessage("");
    }
  };

  return (
       <div className={`app ${darkMode ? "dark " : ""}`}>
    <Card>
   
        <h3>Add Your Review</h3>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter your review"
              value={text}
              onChange={handleTextChange}
            />

            <Button type="submit" disabled={btnDisable}>
              Send
            </Button>
          </div>

          {message && <p className="message">{message}</p>}
        </form>
      
    </Card>
    </div>
  );
};

export default FeedbackForm;