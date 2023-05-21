import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light bg-primary-subtle");
  const [modeDes, setModeDes] = useState("Light mode");

  /* const dark='#696969'; */

  const toggleMode = () => {
    if (mode === "light bg-primary-subtle") {
      console.log("Light to dark");
      setMode("dark");
      setModeDes("Dark Mode");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "#ffffff";
    } else {
      console.log("Dark to light");
      setMode("light bg-primary-subtle");
      setModeDes("Light Mode");
      document.body.style.backgroundColor = "white ";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Textutils"
          subTitle1="About"
          mode={mode}
          toggleMode={toggleMode}
          modeDes={modeDes}
        />

        <div className="container mb-4">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />

            <Route
              path="/"
              element={
                <TextForm heading="Enter the text to Convert." mode={mode} />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
