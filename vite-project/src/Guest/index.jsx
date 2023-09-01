import React from 'react'
import {
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login'
import Signupform from './Components/CustomForm/Signupform';


export default function Guest() {
    return (
        <>
           
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signupform />} />
                <Route path="*" element={<Navigate to ='/' replace = {true} />} />
            </Routes>
        </>
    )
}
{/* <Navigate to='/login' replace={true} /> */ }