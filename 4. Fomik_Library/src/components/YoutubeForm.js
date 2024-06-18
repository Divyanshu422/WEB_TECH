import React from 'react'
import { useFormik } from 'formik'

const initialValue = {
    name: '',
    email: '', 
    channel: ''
}
const onSubmit = values => {
    console.log('Values are ', values);
}
const validatae = (values) => {
    // keys of values object are values.name, values.email and values.channel
    let errors = {};
    if(!values.name){
            errors.name = 'Required';
    }
    if(!values.email){
        errors.name = 'Required';
    }else if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/.test(values.email));

    if(!values.channel){
        errors.name = 'Required';
    }


    //* Returning the object of validate property
    return errors;
}

function YoutubeForm() {
    /* 
        * Calling the useFormik hook which takes object and return a object.
        * the first property used in the useFormik hook is initialValue (CamelCase)
    */
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    })




    console.log(formik.values);

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
             {/* Adding the html skeleton */}
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name}/>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
            <label htmlFor='channel'>Channel</label>
            <input type='text'id='channel' name='channel' placeholder='YouTube channel name' onChange={formik.handleChange} value={formik.values.channel}/>
            <button type='submit'>Submit</button>
        </form>      
    </div>
  )
}

export default YoutubeForm