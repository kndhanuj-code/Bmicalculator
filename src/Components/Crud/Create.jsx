import axios from 'axios'
import React, { useState , useEffect } from 'react'
import { Button } from 'react-bootstrap'
import DataTable from 'react-data-table-component'

const Create = () => {

    let [student , setStudent]=useState([])
    let [dataadd , setDataadd]=useState({
        name:'',
        rollno:'',
        year:'',
        department:'',
        gender:''
    }

    )

    let [isEdit,setIsEdit]=useState(false)


    function getallstudents(){
        axios.get('http://92.205.109.210:8051/api/getall')
        .then(res=>{
            console.log(res.data.data)  
            setStudent(res.data.data)
        }    

        )
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
        ,  {
            name:'update',
            selector:row=><Button  onClick={()=>editHandler(row)}>edit</Button>
        } 
    ]

function editHandler(student){
    console.log(student);

    setDataadd(student)
    setIsEdit(true)
    
   }
   





         useEffect(()=>{
         getallstudents()
          },[])
           

          function changeHandler(e){
            setDataadd({...dataadd,[e.target.name]:e.target.value})


          }

          function submitHandler(e){
        e.preventDefault()
        console.log(dataadd);
        if(isEdit){
            console.log(dataadd);

            let finalResult={
                name:dataadd.name,
                rollno:dataadd.rollno,
                gender:dataadd.gender,
                department:dataadd.department,
                year:dataadd.year
            }


            axios.post(`http://92.205.109.210:8051/api/update/${dataadd.studentId}`,finalResult)
            .then(res=>{
            console.log(res)
            setIsEdit(false)
            getallstudents()

            setDataadd(
                {
        name:'',
        rollno:'',
        department:'',
        year:'',
        gender:''
    }
            )
         alert('user updated successfully')

        
        
        }
        

        )



            
        }else{
             axios.post('http://92.205.109.210:8051/api/create',dataadd)
        .then(res=>{
            console.log(res)
            getallstudents()

            setDataadd(
                {
       name:'',
        rollno:'',
        department:'',
        year:'',
        gender:''
    }
            )
        }
        )
        .catch(err=>console.error(err))
            
        }

    }

  return (
    <div>  

      <form onSubmit={submitHandler}>
            <input type='' placeholder='name' 
            name='name'
            value={dataadd.name}
            onChange={changeHandler}
            />
            
               <input type='' placeholder='rollno' 
            name='rollno'
            value={dataadd.rollno}
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
            value={dataadd.department}
            onChange={changeHandler}
            />
            <input type='' placeholder='year' 
            name='year'
            value={dataadd.year}
            onChange={changeHandler}
            />

           <button type='submit'>{isEdit ? 'update' :'save'}</button>
        </form>







      <DataTable
     data={student}
      columns={col}/>

    </div>
  )
}

export default Create

