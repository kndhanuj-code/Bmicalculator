import axios from 'axios';
import React, { useState ,  useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";





const Stdrecord = () => {
    const navigate = useNavigate();
    let [student , setStudent]=useState([])
    let [adddata,setAdddata]=useState({
        name:'',
        rollno:'',
        gender:'',
        department:'',
        year:''
    })
    function getAllBooks(){
        axios.get('http://92.205.109.210:8051/api/getall')
        .then(res=>{
            console.log(res.data.data);

             setStudent(res.data.data)
            
            
            
        })
    }

    useEffect(()=>{
        getAllBooks()

    },[])
     function deleteStudent(id){
  

    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

     axios.post(`http://92.205.109.210:8051/api/delete/${id}`)
        .then(res=>{
            console.log(res);
            // alert('book deleted successfully')

            getAllBooks()
            
        })


    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
       
    }

    let col=[

        {
            name:'student id',
            selector:row=>row.studentId
        },
        {
            name:'student name',
            selector:row=>row.name
        },
        {
            name:'gender',
            selector:row=>row.gender

        },
        {
             name:'student rollno',
            selector:row=>row.rollno
        },
        {
            name:'srtudent department',
            selector:row=>row.department     
        },
        {
             name:'student year',
            selector:row=>row.year
        },
        
        {
            name:'delete',
            selector:row=><Button variant='danger' onClick={()=>deleteStudent(row.studentId)}>Delete</Button>
        },
        {
  name: 'Add Marks',
  selector: row => (
    <Button
      variant="success"
      onClick={() => navigate(`/marks/${row.studentId}`)}
    >
      Add Marks
    </Button>
  )
}

        
    ]
    function changeHandler(e){
        setAdddata({...adddata,[e.target.name]:e.target.value})


    }

    function submitHandler(e){
        e.preventDefault()
        console.log(adddata);
        axios.post('http://92.205.109.210:8051/api/create',adddata)
        .then(res=>{
            console.log(res)
            getAllBooks()

            setAdddata(
                {
        name:'',
        rollno:'',
        gender:'',
        department:'',
        year:''
    }
            )
        }
        )
        .catch(err=>console.error(err))

    }
  return (
    <div>
     
     <form onSubmit={submitHandler}>
            <input type='' placeholder='name' 
            name='name'
            value={adddata.name}
            onChange={changeHandler}
            />
            
               <input type='' placeholder='rollno' 
            name='rollno'
            value={adddata.rollno}
            onChange={changeHandler}
            />
            
              
              
                <div>
                <label>
                    <input
                 type="radio"
                   name="gender"
                   value="Male"
                  
                 onChange={changeHandler}
                    />
                   Male
                 </label>

                <label>
                <input
                 type="radio"
                name="gender"
                value="Female"
                
                  onChange={changeHandler}
                  />
                  Female
               </label>

               <label>
               <input
                 type="radio"
                 name="gender"
                value="Other"
                
                onChange={changeHandler}
                  />
                Other
              </label>
              </div>

          

            <input type='' placeholder='department' 
            name='department'
            value={adddata.department}
            onChange={changeHandler}
            />
            <input type='' placeholder='year' 
            name='year'
            value={adddata.year}
            onChange={changeHandler}
            />

            <button type='submit'>save</button>
        </form>





       <DataTable   
        data={student}
        columns={col}
        />

        
        
        
    </div>
  )
}

export default Stdrecord
