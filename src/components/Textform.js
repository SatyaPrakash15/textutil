// import React from "react";
import React, { useState } from "react";

export default function Textform(props) {
  const handleUpCase = () => {
    console.log("UpperCase clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoCase = () => {
    // console.log("UpperCase clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const ClearText = () => {
    let newText = "";
    setText(newText);
  };
  const handleSpa = () => {
    const newText = text.replace(/\s+/g, " ").trim(); // Remove all spaces using a regular expression
    setText(newText);
  };
  const copytext = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("text cpied");
      })
      .catch((error) => {
        console.error("unable to copy", error);
      });
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="coontainer">
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="10"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-info mx-2 my-2"
          onClick={handleUpCase}
        >
          ConvertToUpperCase
        </button>
        <button
          type="button"
          className="btn btn-success mx-2 my-2"
          onClick={handleLoCase}
        >
          ConvertLowerCase
        </button>

        <button
          type="button"
          className="btn btn-danger mx-2 my-2"
          onClick={handleSpa}
        >
          HandleSpaces
        </button>

        <button
          type="button"
          className="btn btn-danger mx-2 my-2"
          onClick={copytext}
        >
          Copytext
        </button>
        <button
          type="button"
          className="btn btn-warning mx-3 my-2"
          onClick={ClearText}
        >
          Clear
        </button>
        <button
          type="button"
          className="btn btn-info mx-2 my-2"
          onClick={handleUpCase}
        >
          TranslateHtoE
        </button>
        <button
          type="button"
          className="btn btn-info mx-2 my-2"
          onClick={handleUpCase}
        >
          TranslateEtoH
        </button>
      </div>
      <div>
        <h2>Track your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters{" "}
        </p>
        <div>
          <h3>Average Time to read above text in minute</h3>
        </div>
        <p>{0.008 * text.split(" ").length}</p>
      </div>
    </>
  );
}
