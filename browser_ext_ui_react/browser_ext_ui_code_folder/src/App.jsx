import React, { useState, useEffect } from "react";
// import './index.css'

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const link = document.getElementById("theme-link");
    if (link) {
      link.href =
        theme === "light"
          ? "/src/assets/styles/light.css"
          : "/src/assets/styles/dark.css";
    }
  }, [theme]);

  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <h1>Hello {theme} mode!</h1>
    </div>
  );
}

export default App;
