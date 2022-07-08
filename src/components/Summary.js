import React from "react";

export default function Summary(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <p>
        {props.words} words, {props.char} characters.
      </p>
      <p>Total Read Time (300 wpm): {props.readTime} minutes.</p>
    </>
  );
}
