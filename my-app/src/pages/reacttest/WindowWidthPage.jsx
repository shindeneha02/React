import React, { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default function WindowWidthPage() {
  const width = useWindowWidth();
  return (
    <div>
      <h2>Window Width</h2>
      <p>Current width: {width}px</p>
    </div>
  );
}
