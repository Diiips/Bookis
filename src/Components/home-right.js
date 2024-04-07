import './home-right.css'
import book1 from '../Images/book1.png'
import bookgif from '../Images/bookgif.gif'
import brainbook from '../Images/bookgif2.png'
// import bookimg from '../Images/bookimg2.png'


export default function HomeRightComponent(){
    return(
<div className='home-right-component'>
    <div className='right-img-container'>
        <img src={brainbook}>
        </img>

    </div>
       
</div>
    );
}