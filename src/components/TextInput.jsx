import React from "react";

export default function TextInput({ text }) {
  return (
    <>
      <label>{text}</label>
      <input type="text" placeholder="" />
    </>
  );
}
