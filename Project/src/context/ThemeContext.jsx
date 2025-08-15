import React, { createContext, useState, useEffect, Children } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({children}) {
const [dark, setDark] = useState( () => {
  const savedTheme = localStorage.getItem('theme-dark');
  return savedTheme ? JSON.parse(savedTheme): true;
});

useEffect(() => {
  localStorage.setItem('theme-dark', JSON.stringify(dark) );
  document.body.classList.toggle('dark-mode',dark);
}, [dark]);

return (
  <ThemeContext.Provider value={{dark,toggle: () => setDark( d => !d )}}>
    {children}
  </ThemeContext.Provider>
)
 
}