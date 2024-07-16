import React from 'react';

const SecondForm = ({ values, setValues, personalInfo, setPersonalInfo, countries }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;

        let newValue = value;

        if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                alert('Invalid email format');
                return;
            }
        }

        if (name === 'firstName' || name === 'lastName' || name === 'city' || name === 'state') {
            const nameCityStateRegex = /^[a-zA-Z\s]*$/;
            if (!nameCityStateRegex.test(value)) {
                alert('Only letters and spaces are allowed for First Name, Last Name, City, Phone number and State');
                return;
            }
        }

        if (name === 'phoneNumber') {
            // const phoneRegex = /^(\+?\d{1,4}[\s-]?)?(\(?\d{3}\)?[\s-]?)?\d{3}[\s-]?\d{4}$/;
            const numberRegex = /^\d+$/;
            if (!numberRegex.test(value)) {
                alert('Invalid phone number format');
                return;
            }
        }

        setPersonalInfo({ ...personalInfo, [name]: newValue });
        setValues({ ...values, personalInfo: { ...personalInfo, [name]: newValue } });
    };

    return (
        <div className='w-full max-w-2xl'>
            <form className='bg-white shadow-md px-8 pt-6 pb-8 mb-4 rounded-md'>
                <div className='grid gap-4 place-content-center items-center'>
                    <h1 className='text-gray-700 pb-8 font-bold text-[25px]'>Personal Information</h1>
                </div>
                <div className='mb-4 flex items-center'>
                    <div className='w-1/2 pr-4'>
                        <label className='block text-gray-700 font-bold mb-2' htmlFor='firstName'>
                            First Name<sup style={{ color: 'red' }}>*</sup>
                        </label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='firstName'
                            name='firstName'
                            type='text'
                            placeholder='Enter First Name'
                            value={personalInfo.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='w-1/2 pl-4'>
                        <label className='block text-gray-700 font-bold mb-2' htmlFor='lastName'>
                            Last Name<sup style={{ color: 'red' }}>*</sup>
                        </label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='lastName'
                            name='lastName'
                            type='text'
                            placeholder='Enter Last Name'
                            value={personalInfo.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className='mb-4 flex items-center'>
                    <div className='w-1/2 pr-4'>
                        <label className='block text-gray-700 font-bold mb-2' htmlFor='phoneNumber'>
                            Phone Number
                        </label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='phoneNumber'
                            name='phoneNumber'
                            type='tel'
                            placeholder='Enter Phone Number'
                            value={personalInfo.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='w-1/2 pl-4'>
                        <label className='block text-gray-700 font-bold mb-2' htmlFor='country'>
                            Country<sup style={{ color: 'red' }}>*</sup>
                        </label>
                        <select
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='country'
                            name='country'
                            value={personalInfo.country}
                            onChange={handleChange}
                            required
                        >
                            <option value=''>Select Country</option>
                            {countries.map((country, index) => (
                                <option key={index} value={country.name}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2' htmlFor='address'>
                        Address
                    </label>
                    <textarea
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='address'
                        name='address'
                        rows='3'
                        placeholder='Enter Address'
                        value={personalInfo.address}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className='mb-4 flex items-center'>
                    <div className='w-1/2 pr-4'>
                        <label className='block text-gray-700 font-bold mb-2' htmlFor='city'>
                            City<sup style={{ color: 'red' }}>*</sup>
                        </label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='city'
                            name='city'
                            type='text'
                            placeholder='Enter City'
                            value={personalInfo.city}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='w-1/2 pl-4'>
                        <label className='block text-gray-700 font-bold mb-2' htmlFor='state'>
                            State<sup style={{ color: 'red' }}>*</sup>
                        </label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='state'
                            name='state'
                            type='text'
                            placeholder='Enter State'
                            value={personalInfo.state}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className='mb-4 flex items-center'>
                    <div className='w-1/2 pr-4'>
                        <label className='block text-gray-700 font-bold mb-2' htmlFor='zip'>
                            Zip<sup style={{ color: 'red' }}>*</sup>
                        </label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='zip'
                            name='zip'
                            type='text'
                            placeholder='Enter Zip'
                            value={personalInfo.zip}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='w-1/2 pl-4'>
                        <label className='block text-gray-700 font-bold mb-2' htmlFor='email'>
                            Email
                        </label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='email'
                            name='email'
                            type='email'
                            placeholder='Enter Email'
                            value={personalInfo.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SecondForm;
