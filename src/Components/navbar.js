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
                <li><Link to="/" activeClass="active">Home</Link></li>
                <li><Link to="/AboutPage" activeClass="active">About</Link></li>
                <li><Link to="/RequestBook" activeClass="active">Donate Book</Link></li>
                {/* <li><Link to="/" activeClass="active">Donate Book</Link></li> */}
                {/* <li><Link to="/SelectBook2" activeClass="active">SelectBook2 </Link></li> */}
                <li><Link to="/ContactUs" activeClass="active">Contact Us</Link></li>
            </ul>
            
            <div className='nav-login'>
            <Link to="/Login2">Login</Link>
            </div>
        </div>
    );
}
