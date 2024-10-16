"use client";
import React from "react";

function RevealComponent({ children }) {
  const [isContentShown, setIsContentShown] = React.useState(false);

  if (isContentShown) {
    return children;
  }

  return (
    <div className="reveal">
      <button onClick={() => setIsContentShown(true)}>Reveal Content</button>
    </div>
  );
}

export default RevealComponent;
