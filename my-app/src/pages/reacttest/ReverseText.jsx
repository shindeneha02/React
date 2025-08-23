import React, { useState, useMemo } from "react";

export default function ReverseText() {
  const [text, setText] = useState("");

  const reversed = useMemo(() => text.split("").reverse().join(""), [text]);

  return (
    <div>
      <h2>Reverse Text</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type text..."
      />
      <p>Reversed: {reversed}</p>
    </div>
  );
}
