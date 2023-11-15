import { Link } from "react-router-dom"
import image from "../../../assets/images/Accomp.jpg"
import styles from "./Prestation.module.scss"


function Prestation() {
  return (
    <div className={`${styles.maindiv}`}>
        <div className={`${styles.fakediv}`}>
            <p>Les prestations proposées</p>
            <div className={`${styles.prestadiv}`} >
                <img src={image} alt="" />
                <Link to="/Prestations">En savoir plus</Link>
            </div>
        </div>
    </div>
  )
}

export default Prestation