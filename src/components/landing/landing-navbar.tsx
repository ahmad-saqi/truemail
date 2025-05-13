import { useState } from "react";

import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const LandingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 flex h-20 w-full items-center justify-between bg-[#19223F]/80 backdrop:blur-md  px-6 md:px-20">
      <a href="/" className="w-[270px] text-3xl font-bold text-white cursor-pointer">Truemail</a>

      {/* Desktop Nav */}
      <div className="hidden gap-8 lg:flex">
        <a href="#home" className="text-white hover:text-[#3D6BD8]">
          Home
        </a>
        <a href="#solution" className="text-white hover:text-[#3D6BD8]">
          Solution
        </a>
        <a href="#pricing" className="text-white hover:text-[#3D6BD8]">
          Pricing
        </a>
        <a href="#services" className="text-white hover:text-[#3D6BD8]">
          Company
        </a>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden gap-4 lg:flex">
        <Link to="/signup" className="rounded-full border border-primary px-6 py-2 text-primary hover:bg-primary hover:text-white">
          SignUp
        </Link>
        <button className="rounded-full bg-primary px-6 py-2 text-white hover:bg-[#19223F] hover:text-primary border border-primary">
          Book a Demo
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-20 z-40 flex w-full flex-col items-center md:items-end md:pr-20 gap-6 bg-[#19223F] py-6 shadow-lg lg:hidden">
          <button className="text-white hover:text-[#3D6BD8]">Home</button>
          <button className="text-white hover:text-[#3D6BD8]">Solution</button>
          <button className="text-white hover:text-[#3D6BD8]">Pricing</button>
          <button className="text-white hover:text-[#3D6BD8]">Company</button>
          <button className="rounded-full border border-primary px-6 py-2 text-primary hover:bg-primary hover:text-white">
            SignUp
          </button>
          <button className="rounded-full bg-primary px-6 py-2 text-white hover:bg-[#19223F] hover:text-primary border border-primary">
            Book a Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default LandingNavbar;
