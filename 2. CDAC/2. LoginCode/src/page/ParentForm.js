import React, { useState } from 'react'
import FirstForm from '../component/Form/FirstForm'
import SecondForm from '../component/Form/SecondForm'

function ParentForm() {

    //! Step 1: Creating the state variable which is used to track the page in the form
    const [page, setPage] = useState(0);

    //! Step 2: Creating the list which is displayed on the UI reflecting which page am i.
    const formList = ["Personal Details", "Education", "Experience"];
    const formLength = formList.length;

    //* Creating the 2 handle function for the back and forward click on the button tag
    const handleNext = () => {
        setPage(page === formLength -1 ? 0 : page+1)
    }
    const handlePrev = () => {
        setPage(page === 0 ? formLength - 1 : page - 1)
    }

    console.log(page);

    /*
        * Creating the switch
    */
   const handleForm = () =>{
    switch(page){
        case 0: 
            return <FirstForm/>
        case 1: 
            return <SecondForm/>
        default:
         return null;
        }
    }
  return (
    <div>
        {/* Rendering the Form */}
        <div>{handleForm()}</div>
        {/* Button */}
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>

    </div>
  )
};

export default ParentForm;