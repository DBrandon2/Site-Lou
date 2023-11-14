import { Routes, Route} from "react-router-dom";
import Homepage from "../Page/Homepage/Homepage";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import AvisUtilisateur from "../Page/Avis Utilisateur/AvisUtilisateur";
import Prestations from "../Page/Prestations/Prestations";

function layout() {
    return(
        <>
            <Header/>
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/AvisUtilisateur" element={<AvisUtilisateur/>}></Route>
                    <Route path="/Prestations" element={<Prestations/>}></Route>
                </Routes>
            <Footer/>
        </>
    )
}
export default layout;