import Department from '../Components/department';
// import Navbar from '../Components/navbar';
import './getbook.css'

export default function GetBook(){
    return(
        <div className='getbook-page'>
            
            <div className='engineering-text'>
                <h1>Select your Department</h1>
            </div>
            <div className='department-up-components'>
                <Department/>
                <Department/>
                <Department/>
                <Department/>
                <Department/>
            </div>  
        </div>
    );            
}