import React from 'react';

const ThirdForm = ({ otherInfo, setOtherInfo }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setOtherInfo({ ...otherInfo, [name]: value });
    };

    return (
        <div>
            <div className='w-full max-w-2xl'>
                <form className='bg-white shadow-md px-8 pt-6 pb-8 mb-4 rounded-md'>
                    <div className='grid gap-4 place-content-center items-center'>
                        <h1 className='text-gray-700 pb-8 font-extrabold text-[25px]'>Other Information</h1>
                    </div>
                    <div className='mb-4 flex items-center'>
                        <div className='w-1/2 pr-4'>
                            <label className='block text-gray-700 font-bold mb-2' htmlFor='socialMediaLink2'>
                                Social Media Link 2
                            </label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='socialMediaLink2' name='socialMediaLink2' type='text' placeholder='Enter Social Media Link 2' value={otherInfo.socialMediaLink2} onChange={handleChange} />
                        </div>
                        <div className='w-1/2 pl-4'>
                            <label className='block text-gray-700 font-bold mb-2' htmlFor='socialMediaLink3'>
                                Social Media Link 3
                            </label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='socialMediaLink3' name='socialMediaLink3' type='text' placeholder='Enter Social Media Link 3' value={otherInfo.socialMediaLink3} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 font-bold mb-2' htmlFor='additionalInfo'>
                            Additional Information
                        </label>
                        <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='additionalInfo' name='additionalInfo' rows='3' placeholder='Enter Additional Information' value={otherInfo.additionalInfo} onChange={handleChange}></textarea>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ThirdForm;