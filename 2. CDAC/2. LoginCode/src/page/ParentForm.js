import React, { useState } from 'react';
import FirstForm from '../component/Form/FirstForm';
import SecondForm from '../component/Form/SecondForm';
import ThirdForm from '../component/Form/ThirdForm';

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
    };
    const [values, setValues] = useState(initialValues);
    const [page, setPage] = useState(0);

    const formList = ["Enterprise Info", "Personal Info", "Other Info"];

    const handleNext = () => {
        // Validate the current form before moving to the next page
        switch (page) {
            case 0:
                // No validation needed for the FirstForm
                break;
            case 1:
                if (!values.personalInfo.firstName || !values.personalInfo.lastName || !values.personalInfo.country || !values.personalInfo.city || !values.personalInfo.state || !values.personalInfo.zip) {
                    alert('Please fill in all required fields in the Personal Info form.');
                    return;
                }
                break;
            case 2:
                // No validation needed for the ThirdForm
                break;
            default:
                break;
        }

        setPage((page + 1) % formList.length);
    };

    const handlePrev = () => {
        setPage((page + formList.length - 1) % formList.length);
    };

    const handleForm = () => {
        switch (page) {
            case 0:
                return <FirstForm formValues={values} setValues={setValues} />;
            case 1:
                return <SecondForm values={values} setValues={setValues} personalInfo={values.personalInfo} setPersonalInfo={(personalInfo) => setValues({ ...values, personalInfo })} countries={countries} />;
            case 2:
                return <ThirdForm otherInfo={values.otherInfo} setOtherInfo={(otherInfo) => setValues({ ...values, otherInfo })} />;
            default:
                return null;
        }
    };

    const setForm = (e) => {
        const name = e.target.innerHTML;
        switch (name) {
            case 'Enterprise Info':
                setPage(0);
                break;
            case 'Personal Info':
                setPage(1);
                break;
            case 'Other Info':
                setPage(2);
                break;
            default:
                setPage(0);
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if the user has filled in at least some information in the Other Info form
        if (!values.otherInfo.socialMediaLink2 && !values.otherInfo.socialMediaLink3 && !values.otherInfo.additionalInfo) {
            alert('Please fill in at least some information in the Other Info form before submitting.');
            return;
        }

        setTimeout(() => {
            console.log('Form values:', values);
        }, 2000);
    };

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
    ];

    return (
        <div className='grid gap-4 place-content-center item-center h-screen place-items-center'>
            <ul className='flex justify-between w-full'>
                {formList.map((formLabel, index) => (
                    <li key={index} onClick={setForm} className={page === index ? 'bg-blue-300 w-2/6 rounded-lg' : 'bg-transparent'}>
                        <div className='flex space-x-8'>
                            <div className='flex items-center'>
                                <span className='mr-2'>
                                    {index === 0 && (
                                        <svg className="h-8 w-8 text-blue-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokelinejoin="round">  
                                            <path stroke="none" d="M0 0h24v24H0z"/>  
                                            <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />  
                                            <line x1="13" y1="7" x2="13" y2="7.01" />  
                                            <line x1="17" y1="7" x2="17" y2="7.01" />  
                                            <line x1="17" y1="11" x2="17" y2="11.01" />  
                                            <line x1="17" y1="15" x2="17" y2="15.01" />
                                        </svg>
                                    )}
                                    {index === 1 && (
                                        <svg className="h-8 w-8 text-blue-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                                            <path stroke="none" d="M0 0h24v24H0z"/>  
                                            <circle cx="9" cy="7" r="4" />  
                                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />  
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />  
                                            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                                        </svg>
                                    )}
                                    {index === 2 && (
                                        <svg className="h-8 w-8 text-blue-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                                            <path stroke="none" d="M0 0h24v24H0z"/>  
                                            <rect x="4" y="4" width="16" height="16" rx="2" />  
                                            <path d="M9 12l2 2l4 -4" />
                                        </svg>
                                    )}
                                </span>
                                <span>{formLabel}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div>{handleForm()}</div>
            <div className='flex justify-center items-center'>
                <div className='flex space-x-4'>
                    <button onClick={handlePrev} disabled={page === 0} className='bg-blue-200 hover:bg-blue-300 text-gray-800 font-bold py-2 px-4 rounded-md disabled:bg-gray-400 cursor-pointer'>Prev </button>
                    {
                        page === formList.length - 1 ? (
                            <button onClick={handleSubmit} className='bg-blue-200 hover:bg-blue-300 text-gray-800 font-bold py-2 px-4 rounded-md cursor-pointer'>Submit</button>
                        ) : (
                            <button onClick={handleNext} className='bg-blue-200 hover:bg-blue-300 text-gray-800 font-bold py-2 px-4 rounded-md cursor-pointer'>Next</button>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default ParentForm;