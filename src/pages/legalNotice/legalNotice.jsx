import "./legalNotice.scss"

function LegalNotice () {

    return(
        <main className="main">
            <h1 className="legal-notice-title">Mentions légales</h1>
            <section className="legal-notice">
                <div className="legal-notice__card">
                    <div className="legal-notice__card--content">
                        <p className="paragraph">Hébergeur : Vercel Inc.</p>
                        <p className="paragraph">Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                        <p className="paragraph">Site web : vercel.com</p>
                    </div>
                </div>            
            </section>

            <section className="legal-notice">
                <div className="legal-notice__card">
                    <div className="legal-notice__card--content">
                        <p className="paragraph">Éditeur : [Anthony Pin]</p>
                        <p className="paragraph">Contact : anthonypin0169@gmail.com</p>
                        <p className="paragraph">Statut : projet personnel / étudiant (OpenClassrooms)</p>
                    </div>
                </div>
            </section>

            <section className="legal-notice">
                <div className="legal-notice__card">
                    <div className="legal-notice__card--content">
                        <p className="paragraph">Les données saisies dans le formulaire de contact (nom, prénom, email, message) 
                        sont utilisées uniquement pour vous recontacter suite à votre demande. 
                        Elles ne sont ni conservées sur un serveur, ni cédées à des tiers. 
                        Vous pouvez demander la suppression de vos données en écrivant à 
                        anthonypin0169@gmail.com.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default LegalNotice