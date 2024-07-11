import React, { useState } from 'react'
import FirstForm from '../component/Form/FirstForm'
import SecondForm from '../component/Form/SecondForm'
import ThirdForm from '../component/Form/ThirdForm'

function ParentForm() {
    const initialValues = {
        name: '',
        lastName: '',
        address: '',
        city: '',
        terms: false,
        zip: '',
        password: '',
        confirmPassword: '',
        userName: '',
        personalInfo: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            country: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            email: '',
        },
        otherInfo: {
            socialMediaLink2: '',
            socialMediaLink3: '',
            additionalInfo: '',
        },
    }
    const [values, setValues] = useState(initialValues)
    console.log(values);
    //! Step 1: Creating the state variable which is used to track the page in the form
    const [page, setPage] = useState(0);

    //! Step 2: Creating the list which is displayed on the UI reflecting which page am i.
    const formList = ["Personal Details", "Education", "Experience"];
    const formLength = formList.length;

    //* Creating the 2 handle function for the back and forward click on the button tag
    const handleNext = () => {
        setPage(page === formLength - 1 ? 0 : page + 1)
    }
    const handlePrev = () => {
        setPage(page === 0 ? formLength - 1 : page - 1)
    }

    /*
        * Creating the switch
    */
    const handleForm = () => {
        switch (page) {
            case 0:
                return <FirstForm formValues={values} setValues={setValues} />
            case 1:
                return <SecondForm personalInfo={values.personalInfo} setPersonalInfo={(personalInfo) => setValues({ ...values, personalInfo })} countries={countries} />
            case 2:
                return <ThirdForm otherInfo={values.otherInfo} setOtherInfo={(otherInfo) => setValues({ ...values, otherInfo })} />
            default:
                return null;
        }
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'firstName':
            case 'lastName':
            case 'phoneNumber':
            case 'country':
            case 'address':
            case 'city':
            case 'state':
            case 'zip':
            case 'email':
                setValues({ ...values, personalInfo: { ...values.personalInfo, [name]: value } });
                break;
            case 'socialMediaLink2':
                setValues({ ...values, otherInfo: { ...values.otherInfo, socialMediaLink2: value } });
                break;
            case 'socialMediaLink3':
                setValues({ ...values, otherInfo: { ...values.otherInfo, socialMediaLink3: value } });
                break;
            case 'additionalInfo':
                setValues({ ...values, otherInfo: { ...values.otherInfo, additionalInfo: value } });
                break;
            default:
                setValues({ ...values, [name]: value });
                break;
        }
    }

    const countries = [
        {
            id: 1,
            name: 'India'
        },
        {
            id: 2,
            name: 'Australia'
        },
        {
            id: 3,
            name: 'USA'
        },
        {
            id: 4,
            name: 'Canada'
        },
    ]

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await setTimeout(() => {
            console.log('form values are', values);
        }, 2000)
        return response;
    }

    const setForm = (e) => {
        const name = e.target.innerHtml;
        switch (name){
            case 'Enterprise Info': {
                return setPage(0);
            }
            case 'Personal Info':{
                return setPage(1);
            }
            case 'Other Info':{
                return setPage(2);
            }
            default: 
                return setPage(0)
        }
    }

    return (
        <div className='grid gap-4 place-content-center item-center h-screen place-items-center'>
            {/* Adding the unOrdered List */}
            <ul className='flex justify-between w-full'>
                <li 
                    onClick={setForm}
                    className={page == 0? 'bg-blue-300 w-2/6 rounded-lg':'bg-transparent'}>
                    <div className='flex space-x-8'>
                        <div className='flex items-center'>
                            <span className='mr-2'> 
                                <svg className="h-8 w-8 text-blue-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokelinejoin="round">  
                                    <path stroke="none" d="M0 0h24v24H0z"/>  
                                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />  
                                    <line x1="13" y1="7" x2="13" y2="7.01" />  
                                    <line x1="17" y1="7" x2="17" y2="7.01" />  
                                    <line x1="17" y1="11" x2="17" y2="11.01" />  
                                    <line x1="17" y1="15" x2="17" y2="15.01" />
                                </svg> 
                            </span> 
                            <span>Enterprise Info</span>
                        </div>
                    </div>
                </li>
                <li 
                    onClick={setForm}
                    className={page == 1? 'bg-blue-300 w-2/6 rounded-lg':'bg-transparent'}>
                    <div className='flex space-x-8'>
                        <div className='flex items-center'>
                            <span className='mr-2'>
                                <svg className="h-8 w-8 text-blue-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                                    <path stroke="none" d="M0 0h24v24H0z"/>  
                                    <circle cx="9" cy="7" r="4" />  
                                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />  
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />  
                                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                                </svg>
                            </span>
                            <span>Personal Info</span>
                        </div>
                    </div>
                </li>
                <li 
                    onClick={setForm}
                    className={page == 2? 'bg-blue-300 w-2/6 rounded-lg':'bg-transparent'}>
                    <div className='flex space-x-8'>
                        <div className='flex items-center'>
                            <span className='mr-2'>
                                <svg className="h-8 w-8 text-blue-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                                    <path stroke="none" d="M0 0h24v24H0z"/>  
                                    <rect x="4" y="4" width="16" height="16" rx="2" />  
                                    <path d="M9 12l2 2l4 -4" />
                                </svg>
                            </span>
                            <span>Other Info</span>
                        </div>
                    </div>
                </li>
                 
            </ul>
            {/* Rendering the Form */}
            <div>{handleForm()}</div>
            {/* Button */}
            <div className='flex justify-center items-center'>
                <div className='flex space-x-4'>
                    <button onClick={handlePrev} disabled={page === 0} className='bg-blue-200 hover:bg-blue-300 text-gray-800 font-bold py-2 px-4 rounded-md disabled:bg-gray-400 cursor-pointer'>Prev </button>
                    {
                        page === formLength - 1 ? (
                            <button onClick={handleSubmit} className='bg-blue-200 hover:bg-blue-300 text-gray-800 font-bold py-2 px-4 rounded-md cursor-pointer'>Submit</button>
                        ) : (
                            <button onClick={handleNext} className='bg-blue-200 hover:bg-blue-300 text-gray-800 font-bold py-2 px-4 rounded-md cursor-pointer'>Next</button>
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export default ParentForm