import axios from 'axios'
import React, { useState , useEffect } from 'react'
import { Button } from 'react-bootstrap'
import DataTable from 'react-data-table-component'

const Delete = () => {
    let [student , setStudent]=useState([])

    function getallstudents(){
        axios.get('http://92.205.109.210:8051/api/getall')
        .then(res=>{
            console.log(res.data.data)
            setStudent(res.data.data)
        }

        )
    }

     useEffect(()=>{
        getallstudents()

    },[])

    function deletestudent(id){
         axios.post(`http://92.205.109.210:8051/api/delete/${id}`)
         .then(res=>{
            console.log(res);
            getallstudents()
              alert('student deleted successfully')
    })
         }

         let col=[

        {
            name:'student name',
            selector:row=>row.name

        },
        {
            name:'roll no',
            selector:row=>row.rollno
        },
        {
            name:'year',
            selector:row=>row.year
        },
        {
            name:'department',
            selector:row=>row.department
        },
        {
            name:'gender',
            selector:row=>row.gender
        },
        {
           name:'delete',
            selector:row=><Button variant='danger' onClick={()=>deletestudent(row.studentId)}>Delete</Button> 
        }
    ]


  return (
    <div>
      <DataTable

      data={student}
      columns={col}/>
    </div>
  )
}

export default Delete
