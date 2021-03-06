import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AppLayout from 'components/AppLayout';
import About from './About';
import Home from './Home';
import Accounts from './accounts/';

function Root() {
    return (
        <AppLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/accounts/*" element={<Accounts/>} />
            </Routes>
        </AppLayout>
    );
}

export default Root;