import React from "react";

export default function TextPreview(props) {
  return (
    <>
      <h2>{props.heading}</h2>
      <p>{props.content}</p>
    </>
  );
}
