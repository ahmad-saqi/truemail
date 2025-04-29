import { useState } from "react";

import { Menu, X } from "lucide-react";

const LandingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 flex h-20 w-full items-center justify-between bg-[#19223F] px-6 md:px-20">
      <div className="text-3xl font-bold text-white w-[270px]">Truemail</div>

      {/* Desktop Nav */}
      <div className="hidden gap-8 lg:flex">
        <button className="text-white">Home</button>
        <button className="text-white">Solution</button>
        <button className="text-white">Pricing</button>
        <button className="text-white">Company</button>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden gap-4 lg:flex">
        <button className="rounded-full border border-primary px-6 py-2 text-primary">
          SignUp
        </button>
        <button className="rounded-full bg-primary px-6 py-2 text-white">
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
        <div className="absolute left-0 top-20 z-40 flex w-full flex-col items-center gap-6 bg-[#19223F] py-6 shadow-lg lg:hidden">
          <button className="text-white">Home</button>
          <button className="text-white">Solution</button>
          <button className="text-white">Pricing</button>
          <button className="text-white">Company</button>
          <button className="rounded-full border border-primary px-6 py-2 text-primary">
            SignUp
          </button>
          <button className="rounded-full bg-primary px-6 py-2 text-white">
            Book a Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default LandingNavbar;
