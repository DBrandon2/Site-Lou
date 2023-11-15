import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom"
import "./Sidebar.scss"
import { useState } from "react";

export default props  => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleStateChange = (state) => {
        setMenuOpen(state.isOpen);
      };
    
      const closeMenu = () => {
        setMenuOpen(false);
      };


    return(
        <Menu {...props} isOpen={menuOpen} onStateChange={(state) => handleStateChange(state)}>
        <Link to="/" className="menu-item" onClick={() => closeMenu()}>
          Accueil
        </Link>
        <Link to="/Prestations" className="menu-item" onClick={() => closeMenu()}>
          Prestations
        </Link>
        <Link to="/AvisUtilisateur" className="menu-item" onClick={() => closeMenu()}>
          Avis
        </Link>
      </Menu>
    )
}