import React, { useState, useContext } from "react";
import "../index.css";
import Card from "./sharder/Card";
import FeedbackContext from "../context/FeedbackContext";
import Button from "./sharder/Button";

const FeedbackForm = () => {
  const { addFeedback } = useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [btnDisable, setBtnDisable] = useState(true);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length < 10) return;

    addFeedback(text);

    setText("");
    setBtnDisable(true);
    setMessage("");
  };

  const handleTextChange = (e) => {
    const value = e.target.value;

    setText(value);

    if (value.trim().length === 0) {
      setBtnDisable(true);
      setMessage(null);
    } else if (value.trim().length < 10) {
      setBtnDisable(true);
      setMessage("Character must be at least 10");
    } else {
      setBtnDisable(false);
      setMessage("");
    }
  };

  return (
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
  );
};

export default FeedbackForm;