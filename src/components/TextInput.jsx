import React from "react";

export default function TextInput({ text }) {
  return (
    <div>
      <label className="textLabel" >{text}</label>
      <input type="text" placeholder="" />
    </div>
  );
}
