// Filename: App.js

import { useState, createContext } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { compareText, resetText } from './testText';
import CodeEditor from './Components/CodeEditor/CodeEditor';

const AppContext = createContext(null);


function App() {
  // State variable to set editors default theme
  const [userTheme, setUserTheme] = useState("vs-dark");

  // State variable to set editors default font size
  const [fontSize, setFontSize] = useState(20);

  return (
    <AppContext.Provider value={{userTheme, fontSize}}>
      <div className="App">
      <Navbar
        userTheme={userTheme}
        setUserTheme={setUserTheme}
        fontSize={fontSize}
        setFontSize={setFontSize}
      />
      <CodeEditor 
          fontSize={fontSize}
          userLang={'javascript'}
          userTheme={userTheme}
          compareText={compareText}
          resetText={resetText}
        />
    </div>
    </AppContext.Provider>
    
  );
}

export default App;
