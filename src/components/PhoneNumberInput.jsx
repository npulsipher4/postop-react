import React from "react";
import '../css/PhoneNumberInput.css'

export default function PhoneNumberInput() {
  return (
    <div>
      <label className="textLabel" for="phoneNumber">Phone Number</label>
      <select className="country-code-select">
        <option value="+1">+1 US</option>
        <option value="+44">+44 UK</option>
        <option value="+61">+61 AU</option>
      </select>
      <input type="tel" placeholder="(123) 456-7890" required />
    </div>
  );
}
