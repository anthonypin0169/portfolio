import { BrowserRouter, Route, Routes } from "react-router-dom";
import Careers from "./pages/careers/careers"
import Contact from "./pages/contact/contact"
import Home from "./pages/home/home"
import LegalNotice from "./pages/legalNotice/legalNotice"
import Projects from "./pages/projects/projects"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import ScrollToHash from "./components/scrollToHash/scrollToHash"


function App(){

    return(
        <BrowserRouter>
            <ScrollToHash />
            <Header />
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/projets" element = {<Projects />} />
                <Route path = "/competences" element = {<Careers />} />
                <Route path = "/contact" element = {<Contact />} />
                <Route path = "/mentions-legales" element = {<LegalNotice />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App