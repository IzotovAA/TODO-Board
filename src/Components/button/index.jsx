import React from "react";
import "./index.css";

function Button({ name, onClick, className }) {
  return (
    <button className={className} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
