import React from "react";
import TextInput from "./TextInput";
import PhoneNumberInput from "./PhoneNumberInput";
import '../css/Form.css'

export default function Form() {
  return (
    <form className="signUpForm">
      <TextInput text="First Name" />
      <TextInput text="Last Name" />
      <PhoneNumberInput />
    </form>
  );
}
