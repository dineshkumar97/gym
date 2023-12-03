import React from 'react';
import styles from "../admin.module.scss";

const Sidebar = () => {

    const allSideMenu = document.querySelectorAll('#sidebar');
    allSideMenu.forEach(item => {
        const li = item.parentElement;
        item.addEventListener('click', function () {
            allSideMenu.forEach(i => {
                console.log("test")
                i.parentElement.classList.remove('active');
            })
            li.classList.add('active');
        })
    });
 

    return (
        <div>
            <section id={`${styles.sidebar}`} >
                <p className={`${styles.brand}`}>
                    <i className={`${styles.bx_icon} bx bx-smile`}></i>
                    <span className={`${styles.text}`}>AdminHub</span>
                </p>
                <ul className={`${styles.side_menu} ${styles.top}`}>
                    <li className={`${styles.active}`}>
                        <p>
                            <i className={`${styles.bx_icon} bx bxs-dashboard`}></i>
                            <span className={`${styles.text}`}>Dashboard</span>
                        </p>
                    </li>
                    <li >
                        <p>
                             <i className={`${styles.bx_icon} bx bxs-dashboard`}></i>
                            <span className={`${styles.text}`}>Dashboard</span>
                        </p>
                    </li>
                    <li>
                        <p>
                             <i className={`${styles.bx_icon} bx bxs-dashboard`}></i>
                            <span className={`${styles.text}`}>Dashboard</span>
                        </p>
                    </li>
                    <li>
                        <p>
                             <i className={`${styles.bx_icon} bx bxs-dashboard`}></i>
                            <span className={`${styles.text}`}>Dashboard</span>
                        </p>
                    </li>

                </ul>
                <ul className={`${styles.side_menu}`}>
                    <li>
                        <p>
                             <i className={`${styles.bx_icon} bx bxs-dashboard`}></i>
                            <span className={`${styles.text}`}>Setting</span>
                        </p>
                    </li>
                    <li>
                        <p>
                             <i className={`${styles.bx_icon} bx bxs-dashboard`}></i>
                            <span className={`${styles.text}`}>Dashboard</span>
                        </p>
                    </li>
                    <li>
                        <p>
                             <i className={`${styles.bx_icon} bx bxs-dashboard`}></i>
                            <span className={`${styles.text}`}>Dashboard</span>
                        </p>
                    </li>
                    <li>
                        <p>
                             <i className={`${styles.bx_icon} bx bxs-dashboard`}></i>
                            <span className={`${styles.text}`}>Dashboard</span>
                        </p>
                    </li>

                </ul>
            </section>
            
            <section id={`${styles.content}`} >
                <nav>
                    <i  className={`${styles.cursor} bx bx-menu`}></i>
                    <a > Category</a>
                    <form>
                        <div class={`${styles.form_input} bx bxs-menu`}>
                            <input type='search' />
                            <button type='submit'>
                                <i className={` bx bx-search`}></i>
                            </button>
                        </div>
                    </form>

                    <a  className={`${styles.notification}`}>
                    <i className={`${styles.bx_icon} bx bxs-bell`}></i>
                    <span>8</span>
                    </a>
                </nav>

            </section>
        </div>

    )
};

export default Sidebar;
