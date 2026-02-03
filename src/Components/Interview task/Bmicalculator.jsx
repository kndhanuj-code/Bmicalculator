import React , {useState} from 'react'

const Bmicalculator = () => {
    const[weight ,setWeight]=useState();
    const[height ,setHeight]=useState();
    
const[bmi, setBmi]=useState('');
    const[result, setResult]=useState(''); 

    

    const calculatebmi =(e)=>{
    e.preventDefault();
        const h = height / 100; 
    const result = (weight / (h * h))

    setBmi(result);

    if (bmi < 18.5) {
      setResult("Underweight");
} else if (bmi < 25) {
      setResult("Normal weight");
} else if (bmi < 30) {
      setResult("Overweight");
} else {
      setResult("Obese");
    }
  
  };

  


  return (
    <div>
        <form onSubmit={calculatebmi}>
        <div>
          <input type="number" placeholder="Weight "value={weight} onChange={(e)=>setWeight(e.target.value)} />
        </div>

        <div style={{ marginTop: "10px" }}> <input type="number" placeholder="Height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
        </div>

        <button style={{ marginTop: "15px" }} type="submit"> calculate </button>
        
      </form>
          {bmi && (
        <div >
           BMI: {bmi}
           <br />
          Status: {result}
        </div>
      )}
    </div>
)}


export default Bmicalculator
