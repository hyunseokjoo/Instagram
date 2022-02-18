import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import Signup from './Signup';

function Accounts () {
    return (
        <>
            <Routes>
                <Route path="profile" element={<Profile/>} />
                <Route path="login" element={<Login/>} />
                <Route path="signup" element={<Signup/>} />
            </Routes>
        </>
    );
}

export default Accounts;
