import React from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik'

        const initialValues = {
            name: '',
            email: '', 
            channel: ''
        }
        const onSubmit = values => {
            // console.log('Values are ', values);
        }
        // const validate = (values) => {
        //     /* 
        //     * keys of values object are values.name, values.email and values.channel. 
        //     * the keys to the error object in the validate property of the useFormik hook 
        //     * shall be same as the values object key
        //     */
        //     let errors = {};
        //     if(!values.name){
        //             errors.name = 'Required'; 
        //     }
        //     if(!values.email){
        //         errors.email = 'Required';
        //     }   else if ( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)){
        //         errors.email = 'Invalid email format'
        //     }

        //     if(!values.channel){
        //         errors.channel = 'Required';
        //     }


        //     //* Returning the object of validate property
        //     return errors;
        // }

      /*
        * Creating the validationSchema constant variable
        * assign the variable to the Yup.Object()
        * to the Yup.Object() => pass the rules for each form fields as shown
      */

      const validationSchema = Yup.object({
        // Validation for each field
        name: Yup.string().required('Required!'),
        email: Yup.string().email('Invalid email format').required('Required!'),
        channel: Yup.string().required('Required!'),
      })

function YoutubeForm() {
    /* 
        * Calling the useFormik hook which takes object and return a object.
        * the first property used in the useFormik hook is initialValue (CamelCase)
    */

    const formikObject = useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema 
    })


    // console.log(formikObject.values)
    // console.log(formikObject.errors)
    console.log('the field which is visited are ',formikObject.touched)


  return (
    <>
        <form onSubmit={formikObject.handleSubmit}>

            <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <input type='text' 
                       id='name' 
                       name='name' 
                       onChange={formikObject.handleChange} 
                       value={formikObject.values.name} 
                       onBlur={formikObject.handleBlur}
                />
                {
                   formikObject.touched.name && formikObject.errors.name ? <div className='error'>{formikObject.errors.name} </div> : null
                }
            </div>
             {/* Adding the html skeleton */}
            
            <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' onChange={formikObject.handleChange} value={formikObject.values.email} onBlur={formikObject.handleBlur}/>
                {
                    formikObject.touched.email && formikObject.errors.email ? <div className='error '>{formikObject.errors.email} </div> : null
                }
            </div>
            
            
            <div className='form-control'>
                <label htmlFor='channel'>Channel</label>
                <input type='text'id='channel' name='channel' placeholder='YouTube channel name' onChange={formikObject.handleChange} value={formikObject.values.channel} onBlur={formikObject.handleBlur}/>
                {
                    formikObject.touched.channel &&  formikObject.errors.channel ? <div className='error'>{formikObject.errors.channel} </div> : null
                }
            </div>
            
            <button type='submit'>Submit</button>
        </form>      
    </>
  )
}

export default YoutubeForm