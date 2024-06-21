/*
    * In this video, we will install the formik library and called the useFormik hook
    * as shown in the code. the useFormik hook takes an object as a parameter and return
    * a object which contains varities of methods and properties which are used in the 
    * code (like values property, onSubmit etc).
    * In the code we have used same name for the htmlfor, id and name attribute of 
    * label and input tag.
*/
import React from 'react'
import { useFormik } from 'formik'      //! Import the formik hook


function Form() {
    
    /*
        * the useFormik hook takes the object as an input and return a object. in my
        * code I have named the returned object as formik (Line 21). this object will 
        * Helps in managing the state, handling the submission and validation + error
        * message. 
    */
    const formik = useFormik({
            // will take object
    })





    
  return (
    <div>
        <form>
            <label htmlfor='name'>Name:</label>
            <input type='text' id ='name' name='name'/>
            <label htmlfhtmlor='email'>Email:</label>
            <input type='email' id ='email' name='name'/>
            <label htmlfor='channel'>Channel:</label>
            <input type='text' id ='channel' name='name'/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form