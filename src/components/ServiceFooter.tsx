import Logo from "../assets/Logo.svg";
import { useNavigate } from "react-router-dom";

export default function ServiceFooter() {
    const navigate = useNavigate();
    return (

        <div className="relative w-full bg-primary h-full [mask-image:linear-gradient(to_top,black_70%,transparent_100%)]">
            <img src={Logo} className="relative w-full opacity-0 object-cover -left-[40px]"/>
            <div className="absolute inset-16 flex justify-self-center z-[999] bg-blue-100 w-11/12 h-4/5 opacity-70 rounded-full"/>
            <div className="absolute inset-0 flex items-center justify-center z-[999]">
                <div className="w-11/12 pl-8 pr-8 text-center">
                <h1 className="text-5xl text-secondary font-bold pb-4">Ready to Improve Your Ventilation?</h1>
                <p className="text-xl pb-12 font-medium">Whether you're facing a performance issue or planning a new installation, we are here to help.</p>
                <button type="button" className="w-auto mt-4 px-4 mx-4 btn rounded-full bg-primary text-xl font-medium shadow-[4px_6px_10px_-3px_#bfc9d4] text-secondary h-16" onClick={() => navigate("/contact")}>Request Consultation</button>
                <button type="button" className="w-auto mt-4 px-4  mx-4 btn rounded-full  bg-primary text-xl font-medium shadow-[4px_6px_10px_-3px_#bfc9d4] text-secondary h-16" onClick={() => navigate("/contact")}>Book Performance Testing</button>
                <button type="button" className="w-auto mt-4 px-4  mx-4 btn rounded-full  bg-primary text-xl font-medium shadow-[4px_6px_10px_-3px_#bfc9d4] text-secondary h-16" onClick={() => navigate("/contact")}>System Troubleshooting</button>
                </div>
            </div>
        </div>
    );
}