import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom"
import "./Sidebar.scss"

export default props => {

    return(
        <Menu {...props}>
            
            <Link to="/" className="menu-item">Accueil</Link>
            <Link to="/Prestations" className="menu-item">Prestations</Link>
            <Link to="/AvisUtilisateur" className="menu-item">Avis</Link>

        </Menu>
    )
}