import Aboutme from "./About me/Aboutme"
import Avis from "./Avis/Avis"
import Prestation from "./Prestation/Prestation"


function Homepage() {
  return (
    <div>
      <Aboutme/>
      <Prestation/>
      <Avis/>
    </div>
  )
}

export default Homepage