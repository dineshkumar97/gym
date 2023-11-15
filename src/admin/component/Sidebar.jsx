import React, { Suspense } from 'react';
import styles from "../admin.module.scss";
import Employee from "./Employee";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Sidebar = () => {
    return (

        <div className={`${styles.parent}`}>
            <Header />
            <div className={`${styles.main}`}>
                <div className={`${styles.content_area}`}>
                    <div className={`${styles.sidebar_area}`} role="complementary">
                        <nav className={`${styles.side_navigation}`} role="navigation">
                            <ul className={`${styles.menu}`}>
                                <li className={`${styles.menu_item}`}>
                                    <Link to="/Employee" className="iconContainer">Employee</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <Suspense >
                    <Routes>
                        <Route path={"/"} element={<Employee />} />
                        <Route path={"/test"} element={<Employee />} />
                    </Routes>
                </Suspense>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Sidebar;
