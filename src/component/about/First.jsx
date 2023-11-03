import styles from "./about.module.scss"; 
import photo1 from "../../assets/about2.jpg";
import photo2 from "../../assets/about3.jpg";
const First = () => {
  return (
    <div>
      <div className={`${styles.first} margin-sections main-background`}
        data-aos="zoom-out-down">

        <h1 className="main-heading">
          Start with us the body and
          <br />
          mind clensing
        </h1>
      </div>
      <div className={styles.second} data-aos="fade-right">
        <div>
          <img src={photo1} alt="" />
        </div>
        <div>
          <img src={photo2} alt="" />
        </div>
      </div>
    </div>


  );
};

export default First;
