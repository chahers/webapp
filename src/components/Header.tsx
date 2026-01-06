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
            <div className="fixed p-5 flex gap-5 h-20 w-full justify-between items-center bg-white z-50">
                <img src={Logo} alt="Logo" className="relative w-60 h-auto -left-[40px]"/>
                <nav className="flex gap-5 items-center">
                    <Link to="/" className="font-medium">Home</Link>
                    <Link to="/about" className="font-medium">About</Link>
                    <Link to="/services" className="font-medium">Services</Link>
                    {/* <Link to="/projects" className="font-medium">Projects</Link> */}
                    <Link to="/contact" className="font-medium">Contact Us</Link>
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