import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "../index.css";

const Header = ({
  text = "Review App",
}) => {

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      style={{
        backgroundColor: darkMode ? "#222" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>{text}</h1>

        <button onClick={toggleTheme}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
};

export default Header;