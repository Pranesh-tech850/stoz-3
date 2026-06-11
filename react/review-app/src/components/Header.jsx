const Header = ({
  text = "Review App",
  bgColor = "#333333",
  textColor = "white",
  darkMode,
  toggleTheme,
}) => {
  return (
    <header
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "15px 20px",
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