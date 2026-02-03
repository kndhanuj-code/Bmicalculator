import React, { useRef } from "react";

function Focus() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus(); 
  }

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Type here" />
      <br /><br />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default Focus;
