import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/navbar';
import ViewBook from './Pages/viewbook';
import GetBook from './Pages/getbook';
import HomePage from './Pages/homepage';
import SelectBook from './Pages/SelectBook';
import AboutPage from './Pages/AboutPage';
import ContactUs from './Pages/ContactUs';
import RequestBook from './Pages/RequestBook';
import SelectBook2 from './Pages/SelectBook2';
// import DummyLogin from './Pages/DummyLogin';
import Login2 from './Pages/Login2';
// import Home from './pages/Home';



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
                        <Route path='/SelectBook2' element={<SelectBook2/>} />
                        <Route path='/ContactUs' element={<ContactUs/>} />
                        <Route path='/viewbook' element={<ViewBook />} />
                        {/* <Route path='/DummyLogin' element={<DummyLogin />} /> */}
                        <Route path='/Login2' element={<Login2 />} />
                        

                        {/* <Route path='/SelectBook' element={<SelectBook DEPT_NAME={title} />} /> */}
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








