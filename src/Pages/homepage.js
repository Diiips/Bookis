import HomeLeftComponent from '../Components/home-left';
import HomeRightComponent from '../Components/home-right';
import './homepage.css'


export default function HomePage(){
    return(
<div className='homepage'>
        <div className='book-text-homepage'>
            <HomeLeftComponent/>
        </div>

         <div className='book-img-homepage'>
            <HomeRightComponent/>    
        </div>
</div>

    );
}