import React, { useState } from "react";
import Button from "./Button";
import Summary from "./Summary";
import TextPreview from "./TextPreview";

export default function TextBox(props) {
  const [text, setText] = useState("");

  const convertToUpperCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const convertToLowerCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className=" container my-4">
        <h3> {props.heading}</h3>
        <textarea
          placeholder="Enter Text Here"
          value={text}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="4"
          onChange={handleOnChange}
        ></textarea>
        <Button name="UpperCase" task={convertToUpperCase} />
        <Button name="LowerCase" task={convertToLowerCase} />
      </div>
      <div className="container">
        <Summary
          title="Text Summary:"
          words={text.split(" ").length}
          char={text.length}
          readTime={(0.0032 * text.split(" ").length).toFixed(2)}
        />
        <TextPreview heading="Your Text:" content={text} />
      </div>
    </>
  );
}
