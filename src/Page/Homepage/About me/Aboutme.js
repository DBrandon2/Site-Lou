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
je me déplace dans vos écuries, centres équestres ou chez vous pour différentes prestations.</p>

            <p>Si vous n'avez pas votre propre cheval, mes chevaux seront ravis de vous accompagner lors de
séances de dressage à partir du Galop 3 et d'Equifeel ( travail à pied ) à partir du niveau débutant.
            </p>

            <p>Je met un point d'honneur sur le bien-être animal pour créer une meilleure connexion entre le
cheval et son cavalier afin de les faire évoluer dans de bonnes conditions, avec des bases saines
et solides.
            </p>
            
        </div>
    </div>
  )
}

export default Aboutme