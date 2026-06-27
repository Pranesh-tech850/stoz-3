import { useState,useContext } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
// import FeedbackStats from "./components/FeedbackStats";
import { useEffect } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackContext from "./context/FeedbackContext";
import { FeedbackProvider } from "./context/FeedbackContext";
import ThemeContext from "./context/ThemeContext";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
     
     const {darkMode,toggleTheme} = useContext(ThemeContext);

 
  
  return (
    <ThemeProvider>
    <FeedbackProvider>
      <div className={`app ${darkMode ? "dark" : "app"}`}>
      <Header />
     
      
       <div className={`container ${darkMode ? "dark" : ""}`}>
          
          <FeedbackForm  />

          {/* <FeedbackStats  /> */}
          <FeedbackList  />
        
        </div>
        </div>
  
      
    </FeedbackProvider>
    </ThemeProvider>
  );
};

export default App