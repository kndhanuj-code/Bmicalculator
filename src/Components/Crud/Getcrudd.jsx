import axios from 'axios'
import React, { useState , useEffect } from 'react'
import DataTable from 'react-data-table-component'

const Getcrudd = () => {

    let [image , setImage]=useState([])


    function getallimage(){
        axios.get('http://92.205.109.210:8116/post/getall')
        .then(res=>{
            console.log(res.data.data)  
            setImage(res.data.data)
        }    

        )
    }
    
    let col=[

        {
            name:'title',
            selector:row=>row.title

        },
        {
            name:'content',
            selector:row=>row.content
        },{
          name:'Image',
          cell: row=>(
         <img src={`http://92.205.109.210:8116${row.image}`}/>)
        }
        
    ]
         useEffect(()=>{
         getallimage()
          },[])


  return (
    <div>  









      <DataTable
     data={image}
      columns={col}/>

    </div>
  )
}

export default Getcrudd
