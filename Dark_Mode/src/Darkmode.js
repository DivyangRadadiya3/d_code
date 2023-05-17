import { useState } from "react";
import './Dark.css';
import Button from "./Button";
import Paragraph from "./H1";

export default function ThemeSet(){
  const [theme, setTheme] = useState('light-theme');
  
  function mode() {
    console.log(theme);
    theme === 'dark-theme' ? setTheme('light-theme') : setTheme('dark-theme');
  };

  return (
    <>
      <div className={theme}>
        <Button Name={theme} onClick={mode} />
        <Paragraph />
      </div>
    </>
  )
};
