import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5); 

  useEffect(() => {
    if (countdown === 0) {
      navigate('/'); 
    } else {
      const timer = setTimeout(() => {
        setCountdown(prev => prev - 1); 
      }, 1000);

      return () => clearTimeout(timer); 
    }
  }, [countdown, navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found!</h1>
      <p>Redirecting to Home in {countdown} second{countdown !== 1 ? 's' : ''}...</p>
    </div>
  );
}

export default NotFound;
