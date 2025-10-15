import { useState, useEffect } from "react";

export default function Navigation() {
  const [theme, setTheme] = useState("light");

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <div id="navigation">
        <div className="nav_logo">
          <img src="./src/assets/images/logo.svg" alt="logo" />
        </div>
        <div className="settings_items">
          <button
            id="theme-toggle"
            onClick={handleThemeToggle}
          >
            <span className="theme_text">Change theme</span>
            {theme === "light" ? (
              <img src="./src/assets/images/icon-moon.svg" alt="dark-mode" />
            ) : (
              <img src="./src/assets/images/icon-sun.svg" alt="light-mode" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
