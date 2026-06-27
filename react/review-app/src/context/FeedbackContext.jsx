import { createContext, useEffect, useState } from "react";
import axios from "axios";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const[feedback,setFeedback] = useState([]);
  



useEffect(() => {
  const fetchReviews = async () => {
    const response = await axios.get(
      "https://6a2d58d72edd4cb330d10a8f.mockapi.io/api/v1/FeedbackItem"
    );
   

    setFeedback(response.data);
  };

  fetchReviews();
}, []);
  

 const addFeedback = async (newReview) => {
  const response = await axios.post(
    "https://6a2d58d72edd4cb330d10a8f.mockapi.io/api/v1/FeedbackItem",
    newReview
  );

  setFeedback([response.data, ...feedback]);
};


const deleteFeedback = async (id) => {
  await axios.delete(
    `https://6a2d58d72edd4cb330d10a8f.mockapi.io/api/v1/FeedbackItem/${id}`
  );
  if(window.confirm("Are you Sure You want to delete"))
  {
    
  setFeedback(feedback.filter((item) => item.id !== id));
  }
};
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


const updateFeedback = async (id, updItem) => {
  const response = await axios.put(
    `https://6a2d58d72edd4cb330d10a8f.mockapi.io/api/v1/FeedbackItem/${id}`,
    updItem
  );

  setFeedback(
    feedback.map((item) =>
      item.id === id ? response.data : item
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