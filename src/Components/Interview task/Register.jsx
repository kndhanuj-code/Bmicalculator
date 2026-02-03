import { useFormik } from 'formik'
import React, { useState, button } from 'react'
import { Form } from 'react-bootstrap'
import * as yup from 'yup';



const Register = () => {
  let [form, setForm] = useState(
    {

    username: '',
      emailid: '',
      password: '',
      phonenumber: '',



    }
  )
  


  const validationSchema = yup.object({
    username: yup
      .string()
      .trim()
    .min(3, 'Username must be at least 3 characters')
    .max(30, 'Username must be at most 30 characters')
    .matches(/^[a-zA-Z0-9._-]+$/, 'Only letters, numbers, dot, underscore, and hyphen are allowed'),


    emailid: yup
      .string()
      .trim()
      .email('Enter a valid email address')
      .required('Email is required'),

    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(12, 'Password must be at most 12 characters')
      .matches(/[A-Z]/, 'At least one uppercase letter is required')
      .matches(/[a-z]/, 'At least one lowercase letter is required')
      .matches(/[0-9]/, 'At least one digit is required')
      .matches(/[^A-Za-z0-9]/, 'At least one special character is required')
      .required('Password is required'),

    phonenumber: yup
      .string()
      .trim()
      .matches(/^\+?[0-9]{10}$/, 'Enter a valid phone number')
      .required('Phone number is required'),
  });

  
  const formik = useFormik({

    initialValues:form,
    validationSchema,
    onSubmit:(values,{resetForm})=>{
      console.log(values);
      resetForm()
    }

  })
console.log(formik);


  return (
    <div style={{ border: '1px solid black', height: '280px', width: '300px', marginLeft: '500px' }}>
      <Form onSubmit={formik.handleSubmit}>
        <div style={{ padding: '20px' }}>
          <input placeholder='Enter your username' onChange={formik.handleChange} name='username' value={formik.values.username}
            
          />

          {
            (formik.touched.username && formik.errors.username) && <p className='text-danger'>{formik.errors.username}</p>
          }
          <br />
          <br />
          <input placeholder='Enter your emailid' onChange={formik.handleChange} name='emailid' value={formik.values.emailid}
            
          />
          {
            (formik.touched.emailid && formik.errors.emailid) && <p className='text-danger'>{formik.errors.emailid}</p>
          }
          <br />
          <br />
          <input placeholder='Enter your password' onChange={formik.handleChange} name='password' value={formik.values.password}

             />
          <br />
          {
            formik.errors.password && <p className='text-danger'>{formik.errors.password}</p>
          }
          <br />
          <input placeholder='Enter your number' onChange={formik.handleChange} name='phonenumber' value={formik.values.phonenumber}
             /><br />
          <br />
          {
            formik.errors.phonenumber && <p className='text-danger'>{formik.errors.phonenumber}
              
            </p>
          }
          <button style={{ marginLeft: '40px', backgroundColor: 'green' }}  >Sign up</button>
        </div>
      </Form>
    </div>
  )
}

export default Register