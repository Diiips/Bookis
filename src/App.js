import './App.css'
import Navbar from './Components/navbar';
import GetBook from './Pages/getbook';
import HomePage from './Pages/homepage';
// import HomePage from './Pages/homepage';

export default function App(){
  return(
<div className='App'>

    <div className='App-navbar'>
      <Navbar/>
    </div>
    {/* <div className='App-homepage'>
      <HomePage/>
    </div> */}
    <div className='App-getbook'>
      <GetBook/>
    </div>
   
</div>
  );
}