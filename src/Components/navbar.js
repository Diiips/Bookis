import './navbar.css';
import { Link } from 'react-router-dom';
// import logo from '../Images/logo.png';

export default function Navbar(){
    return(
        <div className='navbar-component'>
            <div className='nav-logo'>
                <h1>Bookis</h1>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/AboutPage">About</Link></li>
                <li><Link to="/RequestBook">Donate Book</Link></li>
                {/* <li><Link to="/">Donate Book</Link></li> */}
                <li><Link to="/ContactUs">Contact Us</Link></li>
            </ul>
            <div className='nav-login'>
            <Link to="/Login3">Login</Link>
            </div>
        </div>
    );
}
