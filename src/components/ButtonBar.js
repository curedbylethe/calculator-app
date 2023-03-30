import React from "react";
import DotButton from "./Button";
import { useContext } from "react";
import ThemeContext from "@/ThemeContext";

export default function ButtonBar() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className={`${theme}-keypad-background`}
      >
        <div
          style={{
            fontSize: "1.25rem",
            fontWeight: "400",
            position: "absolute",
            right: "9rem",
          }}
        >
          THEME
        </div>
        <DotButton themeName="one" />
        <DotButton themeName="two" />
        <DotButton themeName="three" />
      </div>
    </>
  );
}
