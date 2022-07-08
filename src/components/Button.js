import React from "react";

export default function Button(props) {
  return (
    <>
      <button className="btn btn-primary my-2 mx-1" onClick={props.task}>
        {props.name}
      </button>
    </>
  );
}
