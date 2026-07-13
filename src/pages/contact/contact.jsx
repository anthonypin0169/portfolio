import emailjs from '@emailjs/browser'
import { useRef, useState } from "react"
import "./contact.scss"


function Contact() {

    const formRef = useRef(null)
    const [isSending, setIsSending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSending(true)

        emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            console.log("Message envoyé !")
            formRef.current.reset()
            setIsSending(false)
        })
        .catch((error) => {
            console.error("Erreur d'envoi :", error)
            setIsSending(false)
        })
    }
  return(
        <main className="contact">
            <h1 className="contact__title">Laisser un message sur le site :</h1>

            <form action="" className="form" ref={formRef} onSubmit={handleSubmit}>
                <div className="form__content">
                    <div className="form__content--input">
                        <h4 className="form-h4">Nom :</h4>
                        <input type="text" name="nom" required/>
                    </div>
                    <div className="form__content--input">
                        <h4 className="form-h4">Prénom :</h4>
                        <input type="text" name="prenom" required/>
                    </div>
                    <div className="form__content--input">
                        <h4 className="form-h4">Email :</h4>
                        <input type="text" name="email" required/>
                    </div>
                    <div className="form__content--textarea">
                        <h4 className="form-h4">Message :</h4>
                        <textarea name="message" id="" required></textarea>
                    </div>
                    <button className="form__content--btn" disabled={isSending}>Envoyer</button>
                </div>
            </form>

            <h2 className="contact__sub-title">Contact par mail :</h2>
            <div className="email">
                <div className="email__content">
                    <h4 className="email__content--h4">anthonypin0169@gmail.com</h4>
                </div>
            </div>
        </main>
    )
}

export default Contact