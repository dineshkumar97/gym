import styles from "../webiste.module.scss";
import logoIcon from "../../assets/Icon.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles.footer_content} container `}>
        <div>
          <div className={styles.logo_holder}>
            <img src={logoIcon} alt="Logo Icon" />

            <h3>Strengthy</h3>
          </div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable.
          </p>
          <div className={styles.info}>
            <span>Call :</span>
            <p>+9814419350</p>
            <span>Email :</span>
            <p>therichposts@gmail.com</p>
          </div>
        </div>
        <div>
          <ul>
            <li>Utility Pages</li>
            {/* <li onClick={() => navigate("/calculator")}>BMI Calculator</li>
            <li onClick={() => navigate("/schedule")}>Schedule</li>
            <li onClick={() => navigate("/errorPage")}>404 Page</li> */}
            <li>Password Protected</li>
            <li>Licenses</li>
            {/* <li onClick={() => navigate("/contact")}>Contact</li> */}
          </ul>
        </div>
        <div>
          <h3>Newsletter</h3>
          <input type="text" placeholder="Enter Your Email" />
          <button>Subscribe</button>
          <div className={styles.footer_icons}>
            <a
              href="/"
              target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/therichpostajay/" rel="noreferrer" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
