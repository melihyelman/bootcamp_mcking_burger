import React from "react";

const Button = ({ color, bgColor, text, disabled, ...restProps }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      disabled={disabled}
      {...restProps}
    >
      {text}
    </button>
  );
};

export default Button;
