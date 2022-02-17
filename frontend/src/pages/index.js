import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AppLayout from 'components/AppLayout';
import About from './About';
import Home from './Home';
import AccountsRoutes from './accounts';

function Root() {
    return (
        <AppLayout>
            최상위 컴포넌트 입니다.
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/accounts" element={<AccountsRoutes/>} />
            </Routes>
        </AppLayout>
    );
}

export default Root;