import React, { useState } from 'react';
import './RequestBook.css';
import AddDynamicInputFields from '../Components/AddDynamicInputFields'
export default function RequestBook() {
    const initialFormData = {
        Name: "",
        Email: "",
        Year: "",
        Semester: "",
        Department: "",
        BookName: ""
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const fetchData = async (e) => {
        e.preventDefault();

        const requestBody = {
            Name: formData.Name,
            Email: formData.Email,
            Year: formData.Year,
            Semester: formData.Semester,
            Department: formData.Department,
            BookName: formData.BookName
        };

        try {
            const response = await fetch('http://localhost:5000/requestbook', { // Replace with your API URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            alert('Request sent successfully!');
            setFormData(initialFormData); // Reset the form data
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='RequestBook-page'>
            <div className='RequestBook-background'>
                <h1>Donate/Sell Your Book</h1>
            </div>
            <div className='RequestBook-content'>
                <form onSubmit={fetchData}>
                    <div className='RequestBook-input'> 
                        <input
                            type='text'
                            id='Request-name'
                            placeholder='Name'
                            name='Name'
                            value={formData.Name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type='email'
                            id='email'
                            placeholder='Email'
                            name='Email'
                            value={formData.Email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='RequestBook-Form-Select'>
                        <select
                            id='year'
                            name='Year'
                            value={formData.Year}
                            onChange={handleChange}
                            required
                        >
                            <option value='' disabled>Year(Book)</option>
                            <option value='FE'>FE</option>
                            <option value='SE'>SE</option>
                            <option value='TE'>TE</option>
                            <option value='BE'>BE</option>
                        </select>

                        <select
                            id='sem'
                            name='Semester'
                            value={formData.Semester}
                            onChange={handleChange}
                            required
                        >
                            <option value='' disabled>Semester(Book)</option>
                            <option value='sem1'>Sem 1</option>
                            <option value='sem2'>Sem 2</option>
                        </select>

                        <select
                            id='department'
                            name='Department'
                            value={formData.Department}
                            onChange={handleChange}
                            required
                        >
                            <option value='' disabled>Department</option>
                            <option value='Computer Science'>Computer Science</option>
                            <option value='Information Technology'>Information Technology</option>
                            <option value='Mechanical Engineering'>Mechanical Engineering</option>
                            <option value='Civil Engineering'>Civil Engineering</option>
                            <option value='ENTC department'>ENTC department</option>
                            <option value='Artificial & Intelligence'>Artificial & Intelligence</option>
                        </select>
                    </div>
                    {/* <input
                        type='text'
                        id='text'
                        placeholder='Book Name'
                        name='BookName'
                        value={formData.BookName}
                        onChange={handleChange}
                        required
                    /> */}
                    <div className='Dynamicinput'>
                        <AddDynamicInputFields/>
                    </div>
                    
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
}
