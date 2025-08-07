import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email1, setEmail1] = useState('');
  const [passwords, setPasswords] = useState({
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email1.trim()) newErrors.email1 = 'Email is required';

    if (!passwords.password) newErrors.password = 'Password is required';
    if (!passwords.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (passwords.password !== passwords.confirmPassword) {
      newErrors.confirmPassword = 'password and confirm password should be same';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert('Registered successfully!');
      navigate('/login');
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p>{errors.name}</p>}

        <label>Email</label>
        <input
          type="email"
          value={email1}
          onChange={(e) => setEmail1(e.target.value)}
        />
        {errors.email1 && <p>{errors.email1}</p>}

        <label>Password</label>
        <input
          type={showPassword ? 'text' : 'password'}
          value={passwords.password}
          onChange={(e) =>
            setPasswords({ ...passwords, password: e.target.value })
          }
        />
        {errors.password && <p>{errors.password}</p>}

        <label>Confirm Password</label>
        <input
          type={showPassword ? 'text' : 'password'}
          value={passwords.confirmPassword}
          onChange={(e) =>
            setPasswords({ ...passwords, confirmPassword: e.target.value })
          }
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

        <label>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          Show Password
        </label>

        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
