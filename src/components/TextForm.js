import React, { useState } from "react";

export default function TextForm(props) {
  const [Text, setText] = useState("");
  console.log("Working!");

  function handleTextChange(event) {
    console.log("HandleTextChange");
    setText(event.target.value);
  }

  const handleUpperConversion = () => {
    console.log("UpperConversion");
    const upper = Text.toUpperCase();
    setText(upper);
  };

  function handleLowerConversion() {
    console.log("LowerConversion");
    const lower = Text.toLowerCase();
    setText(lower);
  }

  function handleClearText() {
    setText("");
  }

  /* function handlecamelCase (Text) 
    {
      const words = Text.split(" ");
      const capitalizedWords = words.map((word) => {
        const firstLetter = word.charAt(0).toUpperCase();
        const restOfWord = word.slice(1).toLowerCase();
        return firstLetter + restOfWord;
      });
      return capitalizedWords.join(" ");
    }
 */

  function handleTextCopy() {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  var totalWords = Text.split(" ").length;
  const timeTaken = 120;
  function calculateWPM(totalWords, timeTaken) {
    const minutes = timeTaken / 60; // Convert time taken to minutes
    const wpm = totalWords / minutes; // Calculate words per minute
    return wpm;
  }
  const wpm = calculateWPM(totalWords, timeTaken);
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div>
          <h1 style={{ display: "inline" }}>{props.heading}</h1>
        </div>

        <div className="my-4">
          <textarea
            className="form-control "
            id="exampleFormControlTextarea1"
            value={Text}
            rows="8"
            cols="2"
            placeholder="Enter text here..."
            onChange={handleTextChange}
            style={{
              backgroundColor:
                props.mode === "light bg-primary-subtle" ? "white" : "#5d5d77",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>

          <button
            className="btn toupper btn-outline-primary my-3"
            onClick={handleUpperConversion}
          >
            Convert to Uppercase
          </button>
          {/* <button
                className="btn btn-outline-primary my-3 mx-3"
                onClick={handlecamelCase}
                >
                Convert to Capitalized case
                </button> */}
          <button
            className="btn tolower btn-outline-primary my-3 "
            onClick={handleLowerConversion}
          >
            Convert to Lowercase
          </button>

          <button
            style={{ display: "inline" }}
            className="btn copy btn-primary "
            onClick={handleTextCopy}
          >
            &#128203;
          </button>

          <button
            className="btn clear btn-danger my-3 mx-3"
            onClick={handleClearText}
          >
            Clear Text
          </button>
        </div>

        <div className="container my-5">
          <h4>Text Summary:</h4>
          <div>WPM: {wpm}</div>
          <div>
            {Text.length} letters and {Text.split(" ").length} words.
          </div>
          <div>
            {(Text.split(" ").length / 183).toFixed(0)} minutes of reading time.
          </div>
        </div>

        <div className="container my-5">
          <h4>Preview:</h4>
          <p className="preview">
            {Text.length > 0 ? Text : "Enter something to preview."}
          </p>
        </div>
      </div>
    </>
  );
}
