import React, { useState } from 'react'

const Ustatetwo = () => {

    let [array , setArray]=useState('')
    let [result , setResult]=useState('')
     
    function removeDuplicates(){
     
      let realarray=[]
    for(let i=0;i<array.length;i++){
        if(!realarray.includes(array[i])){
            realarray.push(array[i])
        }
    }
    console.log(realarray)
     setResult(realarray)
    }

  
  
    let [data,setData]=useState('')
    
    let [occur,setOccur]=useState(0)

    function  occuerance(){
        let output=0;
        for (let i = 0; i < data.length; i++) {
       if (data[i] === "a") {
         output++;
  }
}
console.log(output)
setOccur(output)
}
   






  return (
    <div>
         {/* <input onChange={(e)=>setArray(e.target.value.split(","))} value={array}/>

        <button onClick={removeDuplicates}>find duplicates</button>
        <p className='text-success'>{result}</p>
<br />
<br /> */}


        <input onChange={(e)=>setData(e.target.value)}/>
       
        <button onClick={occuerance}>find</button>
    <p>{occur}</p>


    </div>
  )
}

export default Ustatetwo



