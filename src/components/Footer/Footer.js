import { Link } from "react-router-dom"
import styles from "./Footer.module.scss"

function Footer() {
  return (
    <>
    <div className={`${styles.Secteurdiv}`}>
        <p>Disponibilité dans les secteurs de Lens, Béthune, Lille et Arras</p>
    </div>
    <div className={`${styles.maindiv}`}>
        <div className={`${styles.divA}`}>
            <ul>
                <span>Services</span>
                <Link to="/Prestations"><li>Enseignement</li></Link>
                <Link to="/Prestations"><li>Travail du cheval</li></Link>
                <Link to="/Prestations"><li>Passage de galops</li></Link>
                <Link to="/Prestations"><li>Coaching concours</li></Link>
                <Link to="/Prestations"><li>Gardiennage</li></Link>
                <Link to="/Prestations"><li>Accompagnement</li></Link>
            </ul>
        </div>
        <div className={`${styles.divB}`}>
            <div className={`${styles.div1}`}>
                <span>Rejoins-nous</span>
            </div>
            <div className={`${styles.div2}`}>
                <a href=" https://www.facebook.com/profile.php?id=100093542845322 "><i class="fa-brands fa-facebook-f"></i></a>
                <a href=" https://www.instagram.com/lou_delangle_monitrice/  "><i class="fa-brands fa-instagram"></i></a>
                <a href=" https://www.tiktok.com/@loudelangle1 "><i class="fa-brands fa-tiktok"></i></a>
            </div>
            <div className={`${styles.div3}`}>
                <p>Lou Delangle</p>
            </div>
        </div>
    </div>
    <div className={`${styles.seconddiv}`}>
        <p>Copyright © Lou Delangle - Monitrice d’équitation</p>
    </div>
    </>
  )
}

export default Footer