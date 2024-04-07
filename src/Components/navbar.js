import './navbar.css'
import logo from '../Images/logo.png'


export default function Navbar(){
    return(
<div className='navbar-component'>
        <div className='nav-logo'>
            <h1>Bookis</h1>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Request Book</li>
            <li>Contact Us</li>
        </ul>
        <div className='nav-login'>
            Login
        </div>
</div>
    );
}