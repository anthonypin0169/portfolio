import "./contact.scss"

function Contact () {

    return(
        <main className="contact">
            <h1 className="contact__title">Laisser un message sur le site :</h1>
            <form action="" className="form">
                <div className="form__content">
                    <div className="form__content--input">
                        <h4 className="form-h4">Nom :</h4>
                        <input type="text" />
                    </div>
                    <div className="form__content--input">
                        <h4 className="form-h4">Prénom :</h4>
                        <input type="text" />
                    </div>
                    <div className="form__content--textarea">
                        <h4 className="form-h4">Message :</h4>
                        <textarea name="" id="" ></textarea>
                    </div>
                    <button className="form__content--btn">Envoyer</button>
                </div>
            </form>
            <h2>Contact par mail :</h2>
            <div className="email">
                <div className="email__content">
                    <h4 className="email__content--h4">anthonypin0169@gmail.com</h4>
                </div>
            </div>
        </main>
    )
}
export default Contact