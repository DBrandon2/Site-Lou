import logo from "../../../assets/images/Logo.png"
import styles from "./Navbar.module.scss"
import banner from "../../../assets/images/BannerHeader.jpg"
import { Link } from "react-router-dom"
import Sidebar from "../../Sidebar/Sidebar"

function Navbar() {
  return (
    <div className={`${styles.maindiv}`}>
      <div className={`${styles.imgdiv}`}>
        <div className={`${styles.blackheader}`}></div>
           <img className={`${styles.HeaderImg}`} src={banner} alt="" />
      </div>
      <div className={`${styles.navdiv}`}>
          <div className={`${styles.IconsDiv}`}>
              <a href=" https://www.facebook.com/profile.php?id=100093542845322 "><i class="fa-brands fa-facebook-f"></i></a>
              <a href=" https://www.instagram.com/lou_delangle_monitrice/ "><i class="fa-brands fa-instagram"></i></a>
              <a href=" https://www.tiktok.com/@loudelangle1 "><i class="fa-brands fa-tiktok"></i></a>
          </div>
          <div className={`${styles.logodiv}`}>
          <Link to="/">
              <img className={`${styles.logo}`} src={logo} alt="" />
          </Link>
          </div>
          <div className={`${styles.burgerdiv}`}>
            <Sidebar className={`${styles.burgerdiv}`} noOverlay right pageWrapId={"page-wrap"} outerContainerId={"App"} />
          </div>
      </div>
    </div>
  )
}

export default Navbar