import React from 'react'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { Form } from 'react-bootstrap'

const Validation = () => {

    let [regform, setRegform] = useState(
        {
            firstname: "",
            email: "",
            eventdate: "",
            numberoftickets: "",
            specialrequest: ""
        }
    )

      
    

    const Schema = Yup.object({
        firstname: Yup
        .string()
            .trim()
            .min(2, "First name must be at least 2 characters")
            .required("First name is required"),

        email: Yup
             .string()
            .email("Invalid email format")
            .required("Email is required"),

        eventdate: Yup.date()
            .required("Event date is required"),
            // .test("is-future", "Event date must be in the future", (value) => {
            //     if (!value) return false;
            //     const today = new Date();
            //     today.setHours(0, 0, 0, 0);
            //     return value > today;
           // }
        
        // ),

        numberoftickets: Yup.number()
            .typeError("Tickets must be a number")
            .integer("Tickets must be an integer")
            .min(1, "At least 1 ticket")
            .max(10, "Maximum 10 tickets")
            .required("Number of tickets is required"),

        specialrequest: Yup.string()
            .max(50, "Special requests cannot exceed 50 characters")
            .optional(),
    });







    const formik = useFormik({

        initialValues: regform,
        validationSchema:Schema,

        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm()
        }

    })
    console.log(formik)



    return (
        <div style={{ border: '1px solid black', height: 'max-content', width: 'max-content', backgroundColor: 'gray', marginLeft: '360px' }}>
            <Form onSubmit={formik.handleSubmit}>
                <div style={{ padding: '20px' }}>
                    <h1>📅 Event Registration Form</h1>
                    <input placeholder='Enter your firstname' onChange={formik.handleChange} name='firstname' value={formik.values.firstname}
                        onBlur={formik.handleBlur}

                    />

                    {
                        (formik.touched.firstname && formik.errors.firstname) && <p className='text-danger'>{formik.errors.firstname}</p>
                    }
                    <br />
                    <br />
                    <input placeholder='Enter your email' onChange={formik.handleChange} name='email' value={formik.values.email}
                        onBlur={formik.handleBlur}
                    />
                    {
                        (formik.touched.email && formik.errors.email) && <p className='text-danger'>{formik.errors.email}</p>
                    }
                    <br />
                    <br />
                    <input placeholder='Enter your event date' type="date" onChange={formik.handleChange} name='eventdate' value={formik.values.eventdate}

                        onBlur={formik.handleBlur} />

                    {
                        formik.errors.eventdate && <p className='text-danger'>{formik.errors.eventdate}</p>
                    }
                    <br />
                    <br />
                    <input placeholder='Enter your number of tickets' onChange={formik.handleChange} name='numberoftickets' value={formik.values.numberoftickets}
                        onBlur={formik.handleBlur} /><br />

                    {
                        formik.errors.numberoftickets && <p className='text-danger'>{formik.errors.numberoftickets}
                            onBlur={formik.handleBlur}
                        </p>
                    }
                    <br />
                    <input placeholder='Enter your special request' onChange={formik.handleChange} name='specialrequest' value={formik.values.specialrequest}
                        onBlur={formik.handleBlur} /><br />

                    {
                        formik.errors.specialrequest && <p className='text-danger'>{formik.errors.specialrequest}
                            onBlur={formik.handleBlur}
                        </p>

                    }
                    <br />
                    <button style={{ marginLeft: '40px', backgroundColor: 'green' }}  >Sign up</button>
                </div>
            </Form>
        </div>
    )
}

export default Validation
