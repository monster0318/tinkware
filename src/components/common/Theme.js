import { useState, useEffect } from "react";

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      // Add 'dark' class to body on initial load if dark mode is enabled
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    // Toggle 'dark' class based on updated value of isDarkMode
    document.body.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div
      className={`tt-style-switch ${isDarkMode ? "index-dark" : ""}`}
      onClick={toggleTheme}
    >
      <i
        className={`bi ${
          isDarkMode ? "bi-moon-fill" : " bi-brightness-low-fill"
        }`}
      />
    </div>
  );
};

export default ThemeSwitch;
