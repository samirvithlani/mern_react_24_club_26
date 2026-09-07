import React from "react";

export const MyCard = (props) => {
  return (
    <div
      style={{
        height: props.height || "200px",
        width: props.width || "300px",
        backgroundColor: props.bgcolor || "white",
        border: "1px solid black",
        borderRadius: "10px",
      }}
    >
        <h1>{props.title || "ADD YOUR TITLE"}</h1>
    </div>
  );
};
