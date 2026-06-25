import { BrowserRouter, Route, Routes } from "react-router-dom";
import Careers from "./pages/careers"
import Contact from "./pages/contact"
import Home from "./pages/home"
import LegalNotice from "./pages/legalNotice"
import Projects from "./pages/projects"
import Header from "./components/header"
import Footer from "./components/footer"


function App(){
    return(
        <BrowserRouter>
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