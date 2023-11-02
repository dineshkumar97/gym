import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './component/header/Header';
import Home from './component/Home';
import Plan from './component/Plan';
import Contact from './component/Contact';
import Employee from './component/Employee';
import Schedule from './component/Schedule';
import Service from './component/Service';
import Members from './component/Members';
import Login from './component/Login';
import Footer from './component/footer/Footer';
const About = lazy(() => import("./component/about/About"));

const App = () => {
  return (
    <div>
      <Header />
      <Suspense >
        <div className="wrapper">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/plan"} element={<Plan />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/employee"} element={<Employee />} />
            <Route path={"/schedule"} element={<Schedule />} />
            <Route path={"/service"} element={<Service />} />
            <Route path={"/members"} element={<Members />} />
            <Route path={"/login"} element={<Login />} />
          </Routes>
        </div>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
