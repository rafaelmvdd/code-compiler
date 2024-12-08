import { Editor, DiffEditor } from "@monaco-editor/react";
import { useState } from "react";
import Axios from "axios";
import spinner from "./spinner.svg";
import "./CodeEditor.css";

const CodeEditor = ({
  fontSize,
  userTheme,
  userLang,
  compareText,
  resetText,
}) => {
  // State variable to set users source code
  const [userCode, setUserCode] = useState(``);

  // State variable to compare code
  const [compare, setCompare] = useState(false);

  // Loading state variable to show spinner
  // while fetching data
  const [loading, setLoading] = useState(false);

  const options = {
    fontSize: fontSize,
  };

  // State variable to set users output
  const [userOutput, setUserOutput] = useState("");

  // Function to call the compile endpoint
  function compile() {
    setLoading(true);
    if (userCode === ``) {
      return;
    }

    // Post request to compile endpoint
    Axios.post(process.env.REACT_APP_COMPILER_URL, {
      code: userCode,
      language: userLang,
      stdin: "",
    })
      .then((res) => {
        setUserOutput(res.data.stdout || res.data.stderr);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setUserOutput(
          "Error: " + (err.response ? err.response.data.error : err.message)
        );
        setLoading(false);
      });
  }

  // Function to clear the output screen
  function clearOutput() {
    setUserOutput("");
  }

  function resetOutput() {
    setUserCode(resetText);
  }

  function compareOutput() {
    if (compare) setCompare(false);
    else setCompare(true);
  }

  return (
    <div className="editor-container">
      <div className="left-container">
        {compare ? (
          <DiffEditor
            options={options}
            height="calc(100vh - 50px)"
            width="100%"
            theme={userTheme}
            language={userLang}
            defaultLanguage="javascript"
            defaultValue=""
            original={compareText}
            modified={userCode}
          />
        ) : (
          <Editor
            options={options}
            height="calc(100vh - 50px)"
            width="100%"
            theme={userTheme}
            language={userLang}
            defaultLanguage="javascript"
            defaultValue=""
            onChange={(value) => {
              console.log(value);
              setUserCode(value);
            }}
            value={userCode}
          />
        )}
        <div className="btn-container">
          <button className="bot-btn" onClick={() => compareOutput()}>
            Compare
          </button>
          <button className="bot-btn" onClick={() => resetOutput()}>
            Reset
          </button>
          <button className="bot-btn" onClick={() => compile()}>
            Run
          </button>
        </div>
      </div>
      <div className="right-container">
        <h4>Output:</h4>
        {loading ? (
          <div className="spinner-box">
            <img src={spinner} alt="Loading..." />
          </div>
        ) : (
          <div className="output-box">
            <pre>{userOutput}</pre>
            <button
              onClick={() => {
                clearOutput();
              }}
              className="clear-btn"
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default CodeEditor;
