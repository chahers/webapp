import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Logo from "../assets/Logo.svg";

export default function Header() {
    return (
        <Router>
            <div className="p-5 flex gap-5 h-20 justify-between items-center overflow-y-hidden">
                <img src={Logo} alt="Logo" className="relative w-52 h-auto -left-[40px]"/>
                <nav className="flex gap-5 items-bottom">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Us</Link>
                </nav>
            </div>
    
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}