import React, { useRef } from "react";

function Button() {
  const clickCount = useRef(0);

  const handleClick = () => {
    clickCount.current=clickCount.current + 1
    console.log( clickCount.current);
  };

  return (
    <div>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default Button;

