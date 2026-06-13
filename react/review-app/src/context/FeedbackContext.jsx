import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: "This is a sample text 1" },
    { id: 2, text: "This is a sample text 2" },
    { id: 3, text: "This is a sample text 3" },
  ]);
  

  const addFeedback = (text) => {
    const newFeedback = {
      id: Date.now(),
      text,
    };
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if(window.confirm("Are You sure to delete the id??"))
    {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }
const [editFeedback, seteditFeedback] = useState({
  item: {},
  edit: false
});

const editItem = (item) => {
  seteditFeedback({
    item,
    edit: true
  });
};


 const updateFeedback = (id, updItem) => {
  setFeedback(
    feedback.map((item) =>
      item.id === id
        ? { ...item, ...updItem }
        : item
    )
  );
};




  return (
    <FeedbackContext.Provider value={{ feedback, addFeedback,deleteFeedback,editFeedback,editItem,updateFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;