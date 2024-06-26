import { useNavigate } from 'react-router-dom';
import './department.css'



export default function Department({Title,Image}){
    const navigate = useNavigate();
    return(   
    <div className='dept-component' onClick={()=>{navigate('/SelectBook',{state:{title:Title}})}}>
            <h1 className='dept-title'>{Title}</h1>
            <img src={Image} className='dept-img'>
            </img>
    </div>

    );
}