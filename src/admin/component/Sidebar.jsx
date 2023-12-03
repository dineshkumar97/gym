import React from "react";
import styles from "../admin.module.scss";
import logoIcon from "../../assets/Icon.png";

class Sidebar extends React.Component {
  // toggleClass = () => {
  //     const oldClassName = document.getElementById('test').className;
  //     const newClassName = oldClassName === 'red' ? 'blue' : 'red'
  //     document.getElementById('test').className = newClassName
  //     console.log('tttt')
  //   }
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.onBarMenuClick = this.onBarMenuClick.bind(this);
  }

  onBarMenuClick(e) {
    console.log(this.state.isActive);
    this.setState((pre) => ({ isActive: !pre.isActive }));
  }

  render() {
    return (
      <div>
        <section
          className={`${
            this.state.isActive ? styles.sidebarhide : styles.sidebarshow
          }`}
          id={styles.sidebar}
        >
          {/* <section id={`${styles.sidebar}`}> */}
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

        <section
          className={`${
            this.state.isActive ? styles.contentfull : styles.contenthalf
          }`}
          id={`${styles.content}`}
        >
          <nav>
            <i
              className={`${styles.cursor} bx bx-menu`}
              onClick={this.onBarMenuClick}
            ></i>
            <a className={`${styles.nav_link} `}> Category</a>
            <form>
              <div className={`${styles.form_input} bx bxs-menu`}>
                <input type="search" />
                <button type="submit">
                  <i className={` bx bx-search`}></i>
                </button>
              </div>
            </form>

            <a className={`${styles.notification}`}>
              <i className={`${styles.bx_icon} bx bxs-bell`}></i>
              <span className={`${styles.num}`}>8</span>
            </a>
            <a>
              <img
                src={logoIcon}
                className={`${styles.profileimage}`}
                alt="Logo Icon"
              />
            </a>
          </nav>
        </section>
      </div>
    );
  }
}

export default Sidebar;
