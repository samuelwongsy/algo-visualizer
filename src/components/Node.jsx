import React from "react";
import "./Node.css";

function Node(props) {
  const extraClassName = props.isFinish
    ? "node-finish"
    : props.isStart
    ? "node-start"
    : "";

  return <div className={`node ${extraClassName}`}></div>;
}

export default Node;
