import { useState, useEffect } from "react";

//components
import Navigation from "./components/Navigation.jsx";
import Ext_Parent from "./components/Ext_Parent.jsx";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      <Navigation
        theme={
          <>
            <button id="theme-toggle"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <span className="theme_text">Change theme</span> {theme === "light" ? <img src="./src/assets/images/icon-moon.svg" alt="dark-mode" /> : <img src="./src/assets/images/icon-sun.svg" alt="light-mode" />} 
            </button>
          </>
        }
      />
      <Ext_Parent />
    </div>
  );
}

export default App;
