import React, { useRef } from "react";

function Input() {
  const inputRef = useRef(null);

  function showValue() {
    alert(inputRef.current.value);
  }

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Enter"/>
      <br /><br />
      <button onClick={showValue}>Show Value</button>
    </div>
  );
}

export default Input;
