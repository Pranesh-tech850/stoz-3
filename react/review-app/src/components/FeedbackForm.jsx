import React, { useState } from "react";
import Card from "./sharder/Card";
import Button from "./sharder/Button";

const FeedbackForm = ({ addFeedback }) => {
  const [text, setText] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length < 10) return;

    addFeedback(text);

    setText("");
    setBtnDisable(false);
    setMessage("");
  };

  const handleTextChange = (e) => {
    const value = e.target.value;

    setText(value);

    if (value.trim().length < 10) {
       setBtnDisable(true);
      setMessage("Character must be at least 10");
     
    } else {
      setBtnDisable(false);
      setMessage("");
      
    }
  };

  return (
    <Card>
      <h3>Add your Reviews</h3>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter your ideas"
            value={text}
            onChange={handleTextChange}
          />

          <Button disabled={btnDisable}>Send</Button>
        </div>

        <p className="message">{message}</p>
      </form>
    </Card>
  );
};

export default FeedbackForm;