import './home-left.css'
import Button from '../Components/button';
import { useNavigate } from 'react-router-dom';

const HomeLeftComponent = () =>{
    const navigate = useNavigate();
    return(
    <div className='home-left-component'>
        <div className='booksforall'>

            <div className='BF letters'>
                <div className='B letter'>B</div>
                <div className='F letter'>F</div>
            </div>
            <div className='rectangle'>
                <div className='inner-rectangle'>
                
                </div>
            </div>
            <div className='OR letters'>
                <div className='O letter'>O</div>
                <div className='R letter'>R</div>
            </div>
            <div className='KA letters'>
                <div className='K letter'>K</div>
                <div className='A letter'>A</div>
            </div>
            <div className='SL letters'>
                <div className='S letter'>S</div>
                <div className='L letter'>L</div>
            </div>
            <div className='singleL letters'>
                <div className='blank letter'></div>
                <div className='L letter'>L</div>
            </div>
        </div>
            
        <div className='para'>
            <p>Regular reading allows you to better formulate your own throughts Our team will always help you makes up your mind and find a book for fun activities
            </p>
        </div>

        <div className='home-page-button' id='homepage-button'>

              <Button Title='Get Books' onclick= {()=>{navigate('getbook')}} className='homepagebtn'/> 
      
        </div>
 
    </div>
);

}
export default HomeLeftComponent;





