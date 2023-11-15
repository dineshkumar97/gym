import React, {  Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Employee from './Employee';

const Website = () => {
    return (
        <div>
            <Header />
            <Suspense >
                <div className="wrapper">
                    <Routes>
                        <Route path={"/employee"} element={<Employee />} />
                    </Routes>
                </div>
            </Suspense>
            <Footer />
        </div>
    );
};

export default Website;
