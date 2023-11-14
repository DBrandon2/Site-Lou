import styles from "./Avis.module.scss"
// import banner from "../../../assets/images/Avis.jpeg"
import banner from "../../../assets/images/Avis2.jpg"
import { Link } from "react-router-dom"

function Avis() {
  return (
    <div className={`${styles.maindiv}`}>
        <div className={`${styles.imgdiv}`}>
            <img className={`${styles.avisImg}`} src={banner} alt="" />
        </div>
        <div className={`${styles.avisdiv}`}>
            <Link to="/AvisUtilisateur" className={`${styles.button}`}>Découvrir plus d'avis</Link>

            <div className={`${styles.commentaire}`}>
                <div className={`${styles.comm1}`}>
                    <span>Mélanie Depaul</span>
                    <p>“ Je recommande Lou, très professionnelle avec une belle approche pédagogique.
                        Elle analyse et comprend les problématiques rencontrées avec nos chevaux et trouve des solutions.
                        Dès la première séance, j’ai vu une nette amélioration dans l’attitude de mon cheval,
                        et des points clés à travailler ! Merci Lou et à très vite “
                    </p>
                </div>

                <div className={`${styles.comm2}`}>
                    <span>Camille Taelman</span>
                    <p>
                    “ Je te dois toute ma réussite, tu m’as appris à monter, à aimer et surtout respecter les chevaux.
                    J’ai une vision tellement différente depuis qu’on avance à 2, tu as fait des miracles !
                    Je n’y croyais plus, ni aux chevaux, ni en moi, tu as réussi à me prouver le contraire,
                    je te remercie pour tout ! Si elle a pu me changer elle pourra vous changer sans aucun doute la meilleure 
                    des coachs “
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Avis