import React, { useState } from 'react'

const Add = () => {
  const [num, setNum] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(0)

  function addNumbers() {
    setResult(Number(num) + Number(num2))
  }

  return (
    <div>
      <input type="number"placeholder="A"value={num}onChange={(e) => setNum(e.target.value)}/>

      <input type="number" placeholder="B" value={num2} onChange={(e) => setNum2(e.target.value)}/>

      <button onClick={addNumbers}>Add</button>

      <p>{result}</p>
    </div>
  )
}

export default Add
