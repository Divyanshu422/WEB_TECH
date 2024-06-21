/*
    * Handling the submission
    * There are 2 step to handle the submission using formik:
    *       1. specify the onSubmit handler on the form tag whose value is equal to 
    *               formik.handleSubmit (formik is the object returned by hook)
    *       2. Define the onSubmit property in the useFormik hook. the property 
    *           calls the callBack function. this callBack function receive 'values'
    *           property as the parameter. values stores the current state value of 
    *           each field.
    *           the values incorporate the all values of field which we have accessed
    *           using formik.values
    *       3. when we click on the submit button => formik will automatically execute
    *           the onSubmit property defined inside the useHook
*/

import React from 'react'
import { useFormik } from 'formik'    


function Form() {

    const formik = useFormik({
            // will take object
           initialValues:{
            name:'',
            email:'',
            channel:''
           }, 
           // onSubmit handler
           onSubmit: (values) => {
                console.log('checking the values', values);
           }
    })


  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlfor='name'>Name:</label>
            <input type='text' id ='name' name='name' onChange={formik.handleChange} value = {formik.values.name}/>
            <label htmlfhtmlor='email'>Email:</label>
            <input type='email' id ='email' name='email' onChange={formik.handleChange} value = {formik.values.email}/>
            <label htmlfor='channel'>Channel:</label>
            <input type='text' id ='channel' name='channel' onChange={formik.handleChange} value = {formik.values.channel}/>
            <button type = 'submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form