import Logo from "../assets/Logo.svg";
import { useNavigate } from "react-router-dom";

export default function ServiceFooter() {
  const navigate = useNavigate();

  return (
    <footer className="relative mt-24 overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-primary [mask-image:linear-gradient(to_top,black_70%,transparent_100%)]" />

      <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-16">
        <h2 className="text-2xl font-bold text-secondary sm:text-4xl">
          Ready to Improve Your Ventilation?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm font-medium text-secondary/80 sm:text-lg">
          Whether you're facing a performance issue or planning a new
          installation, we are here to help.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => navigate("/contact")}
            className="
              h-12 w-full rounded-full bg-primary px-6 text-sm font-medium
              text-secondary shadow-md sm:h-14 sm:w-auto sm:text-base
            "
          >
            Request Consultation
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="
              h-12 w-full rounded-full bg-primary px-6 text-sm font-medium
              text-secondary shadow-md sm:h-14 sm:w-auto sm:text-base
            "
          >
            Book Performance Testing
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="
              h-12 w-full rounded-full bg-primary px-6 text-sm font-medium
              text-secondary shadow-md sm:h-14 sm:w-auto sm:text-base
            "
          >
            System Troubleshooting
          </button>
        </div>
      </div>
    </footer>
  );
}