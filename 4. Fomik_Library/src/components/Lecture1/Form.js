/* 
 * In first draft we are creating a basic form which has 3 fields: name, email and 
 * channel along with summit button. In this draft we have created a simple 3 input
 * fields and applied css on the app.css file.
*/
import React from 'react'

function Form() {
  return (
    <div>
        <form>
            <label for='name'>Name:</label>
            <input type='text' id ='name' name='name'/>
            <label for='email'>Email:</label>
            <input type='email' id ='email' name='name'/>
            <label for='channel'>Channel:</label>
            <input type='text' id ='channel' name='name'/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form