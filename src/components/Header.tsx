import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Logo from "../assets/Logo.svg";
import Design from "../pages/Design";
import Testing from "../pages/Testing";
import Troubleshooting from "../pages/Troubleshooting";

export default function Header() {
    return (
        <Router>
            <div className="fixed p-5 flex gap-5 h-20 w-full justify-between items-center bg-white z-50">
                <img src={Logo} alt="Logo" className="relative w-60 h-auto -left-[40px]"/>
                <nav className="flex gap-5 items-center">
                    <Link to="/" className="font-medium">Home</Link>
                    <Link to="/about" className="font-medium">About</Link>

                    {/* Services with dropdown */}
                    <div className="relative group">
                        <Link
                        to="/services"
                        className="font-medium inline-flex items-center gap-1"
                        >
                        Services
                        <span className="text-sm">▾</span>
                        </Link>

                        {/* Dropdown */}
                        <div className="absolute left-0 mt-2 w-56 rounded-lg bg-white shadow-lg 
                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                        transition-all duration-200"
                        >
                        <Link
                            to="/services/design"
                            className="block px-4 py-3 hover:bg-gray-100"
                        >
                            Engineering Design & Consultancy
                        </Link>

                        <Link
                            to="/services/testing"
                            className="block px-4 py-3 hover:bg-gray-100"
                        >
                            Certified Performance Testing
                        </Link>

                        <Link
                            to="/services/troubleshooting"
                            className="block px-4 py-3 hover:bg-gray-100"
                        >
                            Troubleshooting & System Diagnostics
                        </Link>
                        </div>
                    </div>

                    <Link to="/projects" className="font-medium">Projects</Link>
                    <Link to="/contact" className="font-medium">Contact Us</Link>
                </nav>
            </div>
    
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/testing" element={<Testing />} />
            <Route path="/services/design" element={<Design />} />
            <Route path="/services/troubleshooting" element={<Troubleshooting />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}