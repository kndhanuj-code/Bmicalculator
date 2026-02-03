import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component'
import { Button } from 'react-bootstrap'

const Datatable = () => {

    let [user,setUser]=useState()

    function getData(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            console.log(res.data)  
            setUser(res.data)
        }     )
    }


    let col=[
        {
            name:'USERNAME',
            selector:row=>row.username,
            sortable:true
        },
        {
                  name:'Email',
            selector:row=>row.email,  
        },{
            name:'city',
            selector:row=>row.address.city
        },{
            name:'contact',
            selector:row=>row.phone
        },{
            name:'contacct person',
            selector:row=><Button  variant='danger' onClick={()=>{
                console.log(row.phone);
                
            }}>contct</Button>
        }
    ]

    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
      <h1 className='text-primary'>data table</h1>

      <DataTable

      data={user}
      columns={col}
      pagination
      highlightOnHover
      paginationRowsPerPageOptions={[3,6,9]}

      />
    </div>
  )
}

export default Datatable

