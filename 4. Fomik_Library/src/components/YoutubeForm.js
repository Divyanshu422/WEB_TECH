import React from 'react'
import * as Yup from 'yup';

        import { Formik, Form, Field, ErrorMessage } from 'formik'

        const initialValues = {
            name: '',
            email: '', 
            channel: ''
        }
        const onSubmit = values => {
            // console.log('Values are ', values);
        }
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
  return (
    <Formik
        initialValues = {initialValues}
        onSubmit = {onSubmit}
        validationSchema = {validationSchema}
    >
        <Form>
            <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <Field type='text' 
                       id='name' 
                       name='name' 
                />
                <ErrorMessage name ='name'/>
            </div>
             {/* Adding the html skeleton */}
            <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <Field type='email' id='email' name='email' {...formikObject.getFieldProps('email')} />
                <ErrorMessage name ='email'/>
            </div>
            <div className='form-control'>
                <label htmlFor='channel'>Channel</label>
                <Field type='text'id='channel' name='channel' placeholder='YouTube channel name' onChange={formikObject.handleChange} value={formikObject.values.channel} onBlur={formikObject.handleBlur}/>
                <ErrorMessage name ='channel'/>
            </div>
            <button type='submit'>Submit</button>
        </Form>      
    </Formik>
  )
}

export default YoutubeForm