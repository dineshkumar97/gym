import styles from "../webiste.module.scss";
import logo from "../../assets/Icon.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const navigate = useNavigate();

    const [active, setActive] = useState(false);

    const menuHandler = () => {
        setActive(!active);
    };

    return (
        <header>
            <div className={`${styles.header_content} container`}>
                <div className={styles.logo_holder} onClick={() => navigate("/")}>
                    <div className={styles.image_holder}>
                        <img src={logo} alt="Logo" />
                    </div>
                    Strengthy
                </div>
                <ul className={active ? `${styles.activeList}` : ""}>
                    <li>
                        <Link to="/home" className="iconContainer">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="iconContainer">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="iconContainer">Contact us</Link>
                    </li>
                    <li>
                        <Link to="/plan" className="iconContainer">Plan</Link>
                    </li>
                    <li>
                        <Link to="/schedule" className="iconContainer">Classes / Schedule</Link>
                    </li>
                    <li>
                        <Link to="/employee" className="iconContainer">Employee</Link>
                    </li>
                    <li>
                        <Link to="/members" className="iconContainer">Members</Link>
                    </li>
                    <li>
                        <Link to="/service" className="iconContainer">Service</Link>
                    </li>
                    <li>
                        <Link to="/login" className="iconContainer">Login</Link>
                    </li>
                </ul>
                <div className={styles.menu} onClick={() => menuHandler()}>
                    <i className={`fas ${active ? "fa-times" : "fa-bars"} open-list`}></i>
                </div>
                <div
                    className={`${styles.menu_overlay} ${active ? `${styles.active_overlay}` : ""
                        }`}
                    onClick={() => menuHandler()}></div>
            </div>
        </header>
    );
};

export default Header;
