import React, { useState } from "react";

const ThemeContext = React.createContext({
  theme: "one",
  setTheme: () => {},
});

export default ThemeContext;
