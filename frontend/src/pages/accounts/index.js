import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';

function AccountsRoutes ({ match }) {
    return (
        <>
            <Routes>
                <Route path={match.url + "/profile"} element={<Profile/>} />
                <Route path={match.url + "/login"} element={<Login/>} />
            </Routes>
        </>
    );
}

export default AccountsRoutes;