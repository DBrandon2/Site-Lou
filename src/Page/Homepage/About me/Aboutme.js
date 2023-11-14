import image from "../../../assets/images/à propos.jpg"
import styles from "./Aboutme.module.scss"

function Aboutme() {
  return (
    <div className={`${styles.maindiv}`} >
        <div className={`${styles.upperdiv}`}>
            <span>Lou Delangle Monitrice Indépendante (59/62)</span>
            <div className={`${styles.imgdiv}`} >
                <img src={image} alt="" />
            </div>
        </div>
        <div className={`${styles.textdiv}`} >
            <p>
                Diplômée du Brevet Professionnel de la Jeunesse, de l'Education Populaire et du Sport (BPJEPS), 
                Lou intervient dans les écuries, centres équestres, clubs ou à domicile.</p>

            <p>Si vous n'avez pas votre propore cheval, cette monitrice d'équitation vous présentera Idylle et Imapct
                pour vous accompagner lors de séances de dressage à partir du Galop 3 et d'Equifeel ( travail à pied ) à partir 
                du niveau débutant.
            </p>

            <p>Lou met un point d'honneur sur le bien-être animal pour créer la meilleure connexion entre le cheval et son 
                cavalier et les faire évoluer dans de bonnes conditions, avec des bases saines et solide.
            </p>
            
        </div>
    </div>
  )
}

export default Aboutme