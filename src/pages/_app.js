import "@/sass/main.scss";
import { League_Spartan } from "next/font/google";
import React, { useState } from "react";
import ThemeContext from "@/ThemeContext";

const league_spartan = League_Spartan({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("one");

  const selectTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, selectTheme }}>
        <style jsx global>{`
          html {
            font-family: ${league_spartan.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </>
  );
}
