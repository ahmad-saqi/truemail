import { useEffect, useRef, useState } from "react";



import { BsPersonFill } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { IoMailUnread } from "react-icons/io5";
import { MdHelp } from "react-icons/md";
import { Link } from "react-router-dom";




import profile from "../assets/img/profile.svg";
import Atm from "../assets/img/billing.svg";
import IconData from "../assets/img/icondata.svg";
import credits from "../assets/img/credit.svg";
import logo from "../assets/img/logo.svg";





const menuItems = [
  { label: "Home", path: "/home" },
  { label: "Bulk", path: "/bulk" },
  { label: "Single", path: "/single" },
];

const MenuItem = ({ label, path }: { label: string; path: string }) => (
  <Link to={path} className="flex items-center gap-2 hover:opacity-80">
    <div className="rounded-full bg-white p-2 text-blue-500">
      <IoMailUnread className="size-6" />
    </div>
    <p className="text-lg font-semibold">{label}</p>
  </Link>
);


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#F5F6F8CC] border-b fixed w-full border-gray-200 h-20 px-10">
      <div className="flex justify-between items-center h-full">
        {/* Logo */}
        <img src={logo} alt="Navigation Logo" />

        {/* Menu Items */}
        <nav className="flex flex-col md:flex-row items-center gap-8 ml-20 cursor-pointer">
         {menuItems.map((item) => (
  <MenuItem key={item.label} label={item.label} path={item.path} />
))}

        </nav>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 ml-10">
            <p className="text-lg border-b border-black">Buy Credits</p>
            <div className="flex items-center gap-2">
              <img src={credits} alt="Credits Icon" />
              <p>100 Credit</p>
            </div>
          </div>

          {/* Profile Dropdown */}
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white rounded-full p-2 px-6 flex items-center gap-3 cursor-pointer"
            >
              <p>Rehan Siddique</p>
              <img src={profile} alt="User Profile" className="size-8 rounded-full" />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-4 mr-3 w-[220px] bg-white border border-gray-200 rounded-l-2xl rounded-b-2xl shadow-lg z-50 px-3">
                <Link to="/profile"   className=" flex gap-3 justify-center items-center mt-3" >
                  <img src={profile} alt="" className="h-10 w-10 rounded-full"/>
                  <p className="font">Rehan Siddique</p>
                </Link>
                <div className="px-5 flex flex-col gap-3 justify-start  mt-3 border-b-2 border-gray-200 ">
                  <p className="text-gray-500">CREDIT BALANCE</p>
                  <p className="text-2xl font-bold mb-5">250</p>
                </div>
                <ul className="py-1 text-sm text-gray-700">
                  <div className="flex justify-start items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md">
                    <BsPersonFill className="size-5 text-black"/>
                    <li><a href="/profile" className=" text-lg text-black">Profile</a></li>
                  </div>
                  
                  <div className="flex justify-start items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md">
                  <img src={IconData} className="size-5 text-black"/>
                    <li><a href="#" className=" text-lg text-black">Integration</a></li>
                  </div>
                  <Link to="/billing" className="flex justify-start items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md">
                  <img src={Atm} className="size-5 text-black"/>
                    <li><a href="#" className=" text-lg text-black">Billing</a></li>
                  </Link>
                  <Link to="/helpPage" className="flex justify-start items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md">
                    <MdHelp className="size-5 text-black"/>
                    <li><a href="#" className=" text-lg text-black">Help</a></li>
                  </Link>
                  <div className="flex justify-start items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-b-2xl">
                    <CiLogout className="size-5 text-black"/>
                    <li><a href="#" className=" text-lg text-black">Sign Out</a></li>
                  </div>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;