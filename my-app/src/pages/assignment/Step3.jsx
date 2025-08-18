import React from "react";
import { useNavigate } from "react-router-dom";
import "./Step3.css";

function Step3({ formData }) {
  const navigate = useNavigate();

  const submit = () => {
    alert("Registration Successful! Redirecting to Login...");
    navigate("/login");
  };

  const back = () => {
    navigate("/step-2");
  };

  return (
    <div className="form-container">
      <h2>Step 3: Review & Submit</h2>

      <div className="review-box">
        <p><strong>Full Name:</strong> {formData.fullName}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Username:</strong> {formData.username}</p>
        <p><strong>Password:</strong> {formData.password.replace(/./g, "*")}</p>
      </div>

      <div className="btn-group">
        <button className="back-btn" onClick={back}>
          ⬅️ Back
        </button>
        <button className="submit-btn" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Step3;
