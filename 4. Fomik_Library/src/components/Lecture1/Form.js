/*
    * Lecture 3: Managing the state
    * In the youtube form we have 3 field => name, email, channel. To track these 3 
    * fields we need the state variable for that. But in the case of formik => no need 
    * to create the state variable rather it is useFormik() which return the object
    * will track the state.
*/
/*
    * Step 1: as discussed the useFormik hook consume the object. so the first property
    * we need to pass is the initialValues (Camel_Case). the initialValue property is 
    * an object which takes the initial values for all the form field => name, email, 
    * channel. 
    *   Note: the property for initial value corresponds to the name attribute to the
    *         Channel.
    */

    /*
        * we need to add the onChange and values prop for each of the field property.
        * onChange={formik.handleChange}. handleChange is the method give by hook.
        * value = {formik.values.name}. values is property provided by the hook
    */
import React from 'react'
import { useFormik } from 'formik'      //! Import the formik hook


function Form() {

    const formik = useFormik({
            // will take object
           initialValues:{
            name:'',
            email:'',
            channel:''
           } 
    })

    console.log(formik.values);

  return (
    <div>
        <form>
            <label htmlfor='name'>Name:</label>
            <input type='text' id ='name' name='name' onChange={formik.handleChange} value = {formik.values.name}/>
            <label htmlfhtmlor='email'>Email:</label>
            <input type='email' id ='email' name='email' onChange={formik.handleChange} value = {formik.values.email}/>
            <label htmlfor='channel'>Channel:</label>
            <input type='text' id ='channel' name='channel' onChange={formik.handleChange} value = {formik.values.channel}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form