import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) return;
    const timer = setInterval(() => setCount((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div>
      <h2>Countdown Timer</h2>
      <h3>{count}</h3>
    </div>
  );
}
