import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Step2.css";

function Step2({ formData, handleChange }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const next = () => {
    if (!formData.username || !formData.password || !formData.confirmPassword) {
      alert("All fields are mandatory!");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert(" Password and Confirm Password must match!");
      return;
    }
    navigate("/step-3");
  };

  const back = () => {
    navigate("/step-1");
  };

  return (
    <div className="form-container">
      <h2>Step 2: Account Information</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />

      <input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <input
        type={showPassword ? "text" : "password"}
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />

      <label className="checkbox">
        <input
          type="checkbox"
          onChange={() => setShowPassword(!showPassword)}
        />{" "}
        Show Passwords
      </label>

      <div className="btn-group">
        <button className="back-btn" onClick={back}>
           Back
        </button>
        <button className="next-btn" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Step2;
