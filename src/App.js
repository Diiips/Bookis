import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';
import Navbar from './Components/navbar';
import ViewBook from './Pages/viewbook';
import GetBook from './Pages/getbook';
import HomePage from './Pages/homepage';
import SelectBook from './Pages/SelectBook';
import AboutPage from './Pages/AboutPage';
import ContactUs from './Pages/ContactUs';
import RequestBook from './Pages/RequestBook';
// import Login2 from './Pages/Login2';
import Login3 from './Pages/Login3';

function AppContent() {
    const location = useLocation();
    const { title } = location.state || {};
    const [isloginpage,setisloginpage] = useState(false)

    return (
        <div className='App'>
            <div className='App-navbar'>
                <Navbar/>
            </div>
            <TransitionGroup>
                <CSSTransition key={location.key} classNames="page" timeout={1000}>
                    <Routes location={location}>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/AboutPage' element={<AboutPage />} />
                        <Route path='/RequestBook' element={<RequestBook/>} />
                        <Route path='/GetBook' element={<GetBook />} />
                        <Route path='/SelectBook' element={<SelectBook DEPT_NAME={title} />} />
                        <Route path='/ContactUs' element={<ContactUs/>} />
                        <Route path='/viewbook' element={<ViewBook />} />
                        <Route path='/Login3' element={<Login3 />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </div>
        
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}
