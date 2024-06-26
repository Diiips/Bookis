import Dropdown from '../Components/dropdown';
import './SelectBook.css'
import bookcover from '../Images/Cover.png'
import Button from '../Components/button';
import { useState,useEffect } from 'react';

export default function SelectBook({DEPT_NAME}) {
    const years = ['FE', 'SE', 'TE', 'BE'];
    const semesters = ['SEM 1','SEM 2'];

    const [year, setYear] = useState('');
    const [semester, setSemester] = useState('');
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState('');
    const [sortedbooks, setsortedBooks] = useState([]);
    console.log(book)

    const onchange=()=>{
        var found = books.filter(item => item.semester === semester && item.year === year);
        setsortedBooks(found);
        console.log(found)
    }

    
    
    useEffect(() => {
        var found = books.filter(item => item.semester === semester && item.year === year);
        setsortedBooks(found);
        console.log(found)
    }, [year, semester, books]);

    useEffect(() => {
        const fetchData = async () => {
            const requestBody = {
                Department:DEPT_NAME
            };

            try {
                const response = await fetch('http://localhost:5000/getbooks', { // Replace with your API URL
                    method: 'POST', // HTTP method
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody), // Request body
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setBooks(result);
                
                
              
            } catch (error) { 
                console.error(error)
            }
        };
        fetchData();
    }, [DEPT_NAME]);

    return (
        <div className='bookContainer'>

            <div className='dept-name'>
            <h1>Welcome to {DEPT_NAME} Department</h1>
            </div>
            
         <div className='dorpdown-img-button'>
            <div className='dropdowns'>
                <Dropdown Title='Select Year' Data={years} setValue={setYear} />
                <Dropdown Title='Select Semester' Data={semesters} setValue={setSemester} />
                <Dropdown Title='Select Book' Data={sortedbooks.map(book => book.title)} setValue={setBook} />
            </div>

            <div className='book-cover-img'>
                <img src={bookcover}></img>
            </div>
            <div className='view-download-btn'>
                <Button Title='View Book'/>
                <Button Title='Download'/>
            </div>
            
        </div>
         
                  
        </div>
    )
}
                  
           
           
