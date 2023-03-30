import React, { useContext } from "react";
import ThemeContext from "@/ThemeContext";

export default function DotButton({ themeName }) {
  const { theme, selectTheme } = useContext(ThemeContext);

  const isActive = theme === themeName;

  const handleClick = () => {
    selectTheme(themeName);
  };
  let number;
  switch (themeName) {
    case "one":
      number = 1;
      break;
    case "two":
      number = 2;
      break;
    case "three":
      number = 3;
      break;
    default:
      break;
  }

  return (
    <div
      className={`button ${isActive && `button-${themeName}`}`}
      onClick={handleClick}
    >
      <span className={`button-number ${`button-number-${theme}`}`}>
        {number}
      </span>
    </div>
  );
}
