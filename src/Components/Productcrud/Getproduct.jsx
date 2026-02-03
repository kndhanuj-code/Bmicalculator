import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Getproduct = () => {
   const dispatch=useDispatch()
    const list=useSelector((state)=>state.prodslice.prodsliceItems)
    console.log(list);


  return (
    <div>

      {
            list.map((itm)=><div> 

                <p>{itm.title}</p>
                <p>{itm.model}</p>
                <p>{itm.color}</p>
                 <p>{itm.type}</p>
                 
               
            </div>)
        }

      
    </div>
  )
}

export default Getproduct
