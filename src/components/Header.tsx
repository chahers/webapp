import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Logo from "../assets/Logo.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
        <div className="relative mx-auto h-24 flex max-w-7xl items-center justify-between px-4 sm:px-6 ">
          <img src={Logo} alt="Logo" className="absolute left-1/2 h-24 w-auto -translate-x-1/2 md:static md:translate-x-0 md:h-28"/>
          <nav className="hidden items-center gap-6 md:flex">
            <Link to="/" className="font-medium hover:text-cyan-500">
              Home
            </Link>
            <Link to="/about" className="font-medium hover:text-cyan-500">
              About
            </Link>
            <Link to="/services" className="font-medium hover:text-cyan-500">
              Services
            </Link>
            <Link to="/contact" className="font-medium hover:text-cyan-500">
              Contact Us
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="ml-auto md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t bg-white">
            <nav className="flex flex-col gap-4 px-4 py-6">
              <Link to="/" onClick={() => setOpen(false)} className="font-medium">
                Home
              </Link>
              <Link to="/about" onClick={() => setOpen(false)} className="font-medium">
                About
              </Link>
              <Link to="/services" onClick={() => setOpen(false)} className="font-medium">
                Services
              </Link>
              <Link to="/contact" onClick={() => setOpen(false)} className="font-medium">
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </header>
      <div className="h-16" />

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
