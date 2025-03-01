import React from "react";
import TextInput from "./TextInput";
import PhoneNumberInput from "./PhoneNumberInput";

export default function Form() {
  return (
    <form>
      <TextInput text="First Name" />
      <TextInput text="Last Name" />
      <PhoneNumberInput />
    </form>
  );
}
