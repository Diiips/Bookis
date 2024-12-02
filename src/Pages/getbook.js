import Department from '../Components/department';
import './getbook.css'
import worker from '../Images/worker.png'
import Computer from '../Images/Computer2.png'
import IT from '../Images/IT.png'
import CIVIL from '../Images/Civil.png'
import ENTC from '../Images/ENTC.png'
import AIDS from '../Images/AI2.png'
import { useNavigate } from 'react-router-dom';

export default function GetBook(){
    const navigate = useNavigate();
    return(
        <div className='getbook-page'>
            
            <div className='engineering-text'>
                <h1>Select your Department</h1>
            </div>
            <div className='department-up-components'>
                <Department Title='COMPUTER' Image={Computer} onclick= {()=>{navigate('SelectBook2')}}/>
                <Department Title='IT' Image={IT}/>
                <Department Title='MECHANICAL' Image={worker}/>
                <Department Title='CIVIL' Image={CIVIL}/>
                <Department Title='ENTC' Image={ENTC}/>
                <Department Title='AIDS' Image={AIDS}/>
            </div>  
        </div>
    );            
}