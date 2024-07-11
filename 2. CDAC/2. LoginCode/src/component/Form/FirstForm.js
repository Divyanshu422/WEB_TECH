import React from 'react'

const FirstForm = ({ formValues, setValues }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...formValues, [name]: value });
    }

    return (
        <div>
            <div className='w-full max-w-2xl'>
                <form className='bg-white shadow-md px-8 pt-6 pb-8 mb-4 rounded-md'>
                    <div className='grid gap-4 place-content-center items-center'>
                        <h1 className='text-gray-700 pb-8 font-bold text-[25px]'>Enterprise Information</h1>
                    </div>
                    <div className='mb-4 flex items-center'>
                        <div className='w-1/2 pr-4'>
                            <label className='block text-gray-700 font-bold mb-2' htmlFor='name'>
                                Enterprise Name
                            </label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' name='name' type='text' placeholder='Enter Enterprise Name' value={formValues.name} onChange={handleChange} />
                        </div>
                        <div className='w-1/2 pl-4'>
                            <label className='block text-gray-700 font-bold mb-2' htmlFor='acronym'>
                                Acronym
                            </label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='acronym' name='acronym' type='text' placeholder='Enter Acronym' value={formValues.acronym} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 font-bold mb-2' htmlFor='category'>
                            Category
                        </label>
                        <select className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='category' name='category' value={formValues.category} onChange={handleChange}>
                            <option value="private">Private</option>
                            <option value="public">Public</option>
                        </select>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 font-bold mb-2' htmlFor='description'>
                            Description
                        </label>
                        <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='description' name='description' rows='3' placeholder='Enter Description' value={formValues.description} onChange={handleChange}></textarea>
                    </div>
                    <div className='mb-4 flex items-center'>
                        <div className='w-1/2 pr-4'>
                            <label className='block text-gray-700 font-bold mb-2' htmlFor='website'>
                                Website
                            </label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='website' name='website' type='text' placeholder='Enter Website' value={formValues.website} onChange={handleChange} />
                        </div>
                        <div className='w-1/2 pl-4'>
                            <label className='block text-gray-700 font-bold mb-2' htmlFor='email'>
                                Email
                            </label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' name='email' type='email' placeholder='Enter Email' value={formValues.email} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='mb-4 flex items-center'>
                        <div className='w-1/2 pr-4'>
                            <label className='block text-gray-700 font-bold mb-2' htmlFor='phone'>
                                Phone
                            </label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='phone' name='phone' type='tel' placeholder='Enter Phone' value={formValues.phone} onChange={handleChange} />
                        </div>
                        <div className='w-1/2 pl-4'>
                            <label className='block text-gray-700 font-bold mb-2' htmlFor='fax'>
                                Fax
                            </label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='fax' name='fax' type='tel' placeholder='Enter Fax' value={formValues.fax} onChange={handleChange} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FirstForm