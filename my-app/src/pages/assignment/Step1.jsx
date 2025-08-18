import React from "react";
import { useNavigate } from "react-router-dom";
import "./Step1.css";

function Step1({ formData, handleChange }) {
  const navigate = useNavigate();

  const next = () => {
    if (!formData.fullName || !formData.phone) {
      alert("All fields are mandatory!");
      return;
    }
    if (formData.phone.length !== 10) {
      alert(" Phone number must be 10 digits!");
      return;
    }
    navigate("/step-2");
  };

  return (
    <div className="form-container">
      <h2>Step 1: Personal Information</h2>
      <input 
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />
      <button className="next-btn" onClick={next}>
        Next 
      </button>
    </div>
  );
}

export default Step1;
