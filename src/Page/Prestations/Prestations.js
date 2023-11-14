import "./Prestations.scss"
import imageEnseignement from "../../assets/images/Enseignement.jpg"
import imageTravail from "../../assets/images/Travail du cheval.jpg"
import imageGalops from "../../assets/images/Passage de galops.jpg"
import imageConcours from "../../assets/images/Coaching concours.jpg"
import imageGardiennage from "../../assets/images/Gardiennage.jpg"
import imageAccompagnement from "../../assets/images/Accompagnement.jpg"




function Prestations() {



  return (

    <div className="maindivPresta">
      <div class="wrapper">
        {/* ---------------------------------------------------------------------------------- */}
        {/* -----Card 1-------- */}
        {/* ---------------------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------------------- */}
          <div class="card">
            <input type="checkbox" id="card1" class="more" aria-hidden="true"/>
              <div class="content">
                  <div class="front" Style={`background-image: url('${imageEnseignement}')`}>
                      <div class="inner">
                          <h2>Enseignement</h2>
                          <label for="card1" class="button" aria-hidden="true">
                              Details
                          </label>
                    </div>
                  </div>
                    <div class="back">
                        <div class="inner">
                            <div class="description">
                                <p>Monitrice d’équitation indépendante diplômée du BPJEPS, je vous propose :
                                </p>
                                <ul>
                                  <li>- Cours particuliers &amp; collectifs du baby au galop 7, toutes disciplines</li>
                                  <li>- Stages toutes disciplines</li>
                                </ul>
                                

                                <p>Patience, remise en question, gestion des émotions… Ces valeurs sont nécessaires pour que le
                                  couple cheval/cavalier fonctionne et c&#39;est cette équitation que je transmet à mes cavaliers.
                                  Apprendre à ressentir, analyser, comprendre son cheval que ce soit monté ou au sol pour pouvoir
                                  communiquer et évoluer dans les meilleures conditions possibles avec des bases saines.
                                </p>
                                <p>Que ce soit pour du loisir ou du perfectionnement, je m&#39;adapte à vos envies et objectifs</p>
                                <p>Chevaux d’instruction disponibles pour du Dressage (à partir du niveau galop 3) et de l’Equifeel
                                  (ouvert à tous) si vous n’avez pas votre cheval personnel
                                </p>
                            </div>
                       
                          <div class="Prestation">Enseignement</div>
                          
                       
                        <label for="card1" class="button return" aria-hidden="true">
                            <i class="fas fa-arrow-left"></i>
                        </label>
                    </div>
                </div>
              </div>
          </div>
      

        {/* ---------------------------------------------------------------------------------- */}
        {/* -----Card 2-------- */}
        {/* ---------------------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------------------- */}
        <div class="card">
            <input type="checkbox" id="card2" class="more" aria-hidden="true"/>
              <div class="content">
                  <div class="front" Style={`background-image: url('${imageTravail}')`}>
                      <div class="inner">
                          <h2>Travail du cheval</h2>
                          <label for="card2" class="button" aria-hidden="true">
                              Details
                          </label>
                    </div>
                  </div>
                    <div class="back">
                        <div class="inner">
                            <div class="description">
                                <p>Je propose le travail de vos chevaux / poneys sur le plat et au sol (longues rênes, longes,
                                  désensibilisation, travail à pied)
                                </p>
                                <p>Pourquoi faire ?</p>
                                <ul>
                                  <li> - Améliorer son travail sur le plat</li>
                                  <li>- Améliorer son fonctionnement</li>
                                  <li>- Le muscler</li>
                                  <li>- Résoudre les problèmes rencontrés à la monte</li>
                                  <li> - Trouver des pistes d’amélioration dans votre travail quotidien</li>
                                  <li> - Vous donner les clés pour atteindre vos objectifs avec un cheval possédant une bonne
                                    condition physique</li>
                                </ul>
                                <li>- Connaître la détente la plus adaptée pour votre cheval</li>
                                <p>Le travail de votre cheval peut se faire en complément ou non de cours particuliers</p>
                            </div>
                       
                          <div class="Prestation">Travail du cheval</div>
                          
                       
                        <label for="card2" class="button return" aria-hidden="true">
                            <i class="fas fa-arrow-left"></i>
                        </label>
                    </div>
                </div>
              </div>
          </div>
        {/* ---------------------------------------------------------------------------------- */}
        {/* -----Card 3-------- */}
        {/* ---------------------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------------------- */}
        <div class="card">
            <input type="checkbox" id="card3" class="more" aria-hidden="true"/>
              <div class="content">
                  <div class="front" Style={`background-image: url('${imageGalops}')`}>
                      <div class="inner">
                          <h2>Passage de galops</h2>
                          <label for="card3" class="button" aria-hidden="true">
                              Details
                          </label>
                    </div>
                  </div>
                    <div class="back">
                        <div class="inner">
                            <div class="description">
                                <p>Les Galops sont des examens fédéraux, qui vous donneront accès à un diplôme attestant de
                                  votre niveau de compétences de cavalier licencié. Chaque étape évalue vos connaissances et
                                  votre pratique. Ils sont composés d’une épreuve montée et d’une épreuve théorique.
                                </p>
                                <p>Pourquoi passer vos galops ? </p>
                                <ul>
                                  <li>- Pour rythmer votre apprentissage par des étapes logiques</li>
                                  <li>- Pour situer votre niveau et constater vos progrès</li>
                                  <li>- Pour se préparer et commencer la compétition</li>
                                </ul>
                                <p>Il est possible de les passer seul ou à plusieurs, sur une ou plusieurs journées en fonction du
                                  niveau et de la condition physique de votre cheval
                                </p>
                            </div>
                       
                          <div class="Prestation">Passage de galops</div>
                          
                       
                        <label for="card3" class="button return" aria-hidden="true">
                            <i class="fas fa-arrow-left"></i>
                        </label>
                    </div>
                </div>
              </div>
          </div>
            {/* ---------------------------------------------------------------------------------- */}
            {/* -----Card 4-------- */}
            {/* ---------------------------------------------------------------------------------- */}
            {/* ---------------------------------------------------------------------------------- */}
            <div class="card">
            <input type="checkbox" id="card4" class="more" aria-hidden="true"/>
              <div class="content">
                  <div class="front" Style={`background-image: url('${imageConcours}')`}>
                      <div class="inner">
                          <h2>Coaching concours</h2>
                          <label for="card4" class="button" aria-hidden="true">
                              Details
                          </label>
                    </div>
                  </div>
                    <div class="back">
                        <div class="inner">
                            <div class="description">
                                <p>L’accompagnement en concours vous permet d’avoir :</p>
                                <ul>
                                  <li>- une préparation mentale</li>
                                  <li>- un accompagnement dans la gestion de vos émotions</li>
                                  <li>- une aide lors de la reconnaissance (tracés, foulées, équilibres à adapter…)</li>
                                  <li>- une détente construite</li>
                                  <li>- un suvi technique</li>
                                  <li>- des réponses à vos diverses questions</li>
                                  <li>- un débriefing avec des axes d’amélioration suite à votre passage ainsi que des exercices
                                    adaptés pour résoudre les éventuels problèmes rencontrés</li>
                                </ul>
                            </div>
                       
                          <div class="Prestation">Coaching concours</div>
                          
                       
                        <label for="card4" class="button return" aria-hidden="true">
                            <i class="fas fa-arrow-left"></i>
                        </label>
                    </div>
                </div>
              </div>
          </div>
            {/* ---------------------------------------------------------------------------------- */}
            {/* -----Card 5-------- */}
            {/* ---------------------------------------------------------------------------------- */}
            {/* ---------------------------------------------------------------------------------- */}
            <div class="card">
            <input type="checkbox" id="card5" class="more" aria-hidden="true"/>
              <div class="content">
                  <div class="front" Style={`background-image: url('${imageGardiennage}')`}>
                      <div class="inner">
                          <h2>Gardiennage</h2>
                          <label for="card5" class="button" aria-hidden="true">
                              Details
                          </label>
                    </div>
                  </div>
                    <div class="back">
                        <div class="inner">
                            <div class="description">
                                <p>
                                  Vous partez en vacances et vous n’avez pas de personne de confiance pour prendre soin de
                                  votre loulou ?
                                </p>
                                <p>Je vous propose :</p>
                                <ul>
                                  <li>- une surveillance en pature, gestion de la nourriture &amp; des soins</li>
                                  <li>- d’assurer les sorties, monte, longe, liberté</li>
                                </ul>
                                <p>Envoi de nouvelles quotidiennes, partez serein, vos chevaux seront entre de bonnes mains</p>
                            </div>
                       
                          <div class="Prestation">Gardiennage</div>
                          
                       
                        <label for="card5" class="button return" aria-hidden="true">
                            <i class="fas fa-arrow-left"></i>
                        </label>
                    </div>
                </div>
              </div>
          </div>
            {/* ---------------------------------------------------------------------------------- */}
            {/* -----Card 6-------- */}
            {/* ---------------------------------------------------------------------------------- */}
            {/* ---------------------------------------------------------------------------------- */}
            <div class="card">
            <input type="checkbox" id="card6" class="more" aria-hidden="true"/>
              <div class="content">
                  <div class="front" Style={`background-image: url('${imageAccompagnement}')`}>
                      <div class="inner">
                          <h2>Accompagnement Achat/Vente</h2>
                          <label for="card6" class="button" aria-hidden="true">
                              Details
                          </label>
                    </div>
                  </div>
                    <div class="back">
                        <div class="inner">
                            <div class="description">
                                <p>Achat :</p>
                                <ul>
                                  <li>- défiinir vos critères</li>
                                  <li>- trouver un cheval adapté à vos envies &amp; objectifs</li>
                                  <li>- accompagnement lors des essais</li>
                                </ul>
                                <p>Vente :</p>
                                <ul>
                                  <li>- aide à la rédaction de votre annonce / photos adaptées</li>
                                  <li>- définir un prix</li>
                                  <li>- trouver la famille qui correspond aux besoins de votre cheval</li>
                                  <li>- accompagnement lors des essais</li>
                                </ul>
                               
                            </div>
                       
                          <div class="Prestation">Accompagnement Achat/Vente</div>
                          
                       
                        <label for="card6" class="button return" aria-hidden="true">
                            <i class="fas fa-arrow-left"></i>
                        </label>
                    </div>
                </div>
              </div>
          </div>


            {/* ----------------- */}
          </div>
        </div>

  )
}

export default Prestations