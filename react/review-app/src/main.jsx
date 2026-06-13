import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { FeedbackProvider } from "./context/FeedbackContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <FeedbackProvider>
      <App />
    </FeedbackProvider>
  </ThemeProvider>
);