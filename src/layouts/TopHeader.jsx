import { useState, useEffect } from "react";
import {
  RiPhoneLine,
  RiMailLine,
  RiInstagramLine,
  RiFacebookLine,
  RiYoutubeLine,
  RiMenuLine,
  RiCloseLine,
  RiInfoCardLine,
} from "react-icons/ri";

const TopHeader = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Promotional Banner with Marquee */}
      <div className="bg-white text-gray-700 text-sm py-2 overflow-hidden">
        <div className="marquee-container">
          <div className="animate-marquee whitespace-nowrap">
           Gujarat tour Package , Dwarka Somnath Tour Package , Nageshwar Jyotirlinga Tour Package , Nishkalanka Mahadev Temple, Saasan Gir, Diu Tour Package , Punch Dwarka tour Package, Complete Gujarat Tour Package,Gujarat Family Tour Package , Rann Utsav tour Package, Kutch Tour Package , Gujarat Trip Package, Statue Of Unity tour Package. 
          </div>
        </div>
      </div>

      {/* Contact Info & Social Media Bar */}
      <div className="bg-orange-500 text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Left Side - Contact Info */}
          <div className="flex items-center space-x-2 md:space-x-6">
            <a
              href="mailto:info@gujrattourpackage.com"
              className="flex items-center hover:text-orange-100 text-xs md:text-base"
            >
              <RiMailLine className="mr-1 md:mr-2" />
              <span className="hidden sm:inline">
                info@gujrattourpackage.com
              </span>
            </a>
            <a
              href="https://wa.me/+919898895766"
              className="flex items-center hover:text-orange-100 text-xs md:text-base"
            >
              <RiPhoneLine className="mr-1 md:mr-2" />
              <span className="hidden sm:inline">+91 9898 898766</span>
            </a>
          </div>

          {/* Right Side - Company Info & Social Media */}
          <div className="flex items-center space-x-2">
            <span className="hidden md:inline mr-6 text-sm">
              Gujarat tour package, Ahmedabad, Gujarat
            </span>
            {/* <div className="flex space-x-2 md:space-x-4">
              <a
                href="#"
                className="hover:text-orange-100 text-sm md:text-base"
              >
                <RiFacebookLine />
              </a>
              <a
                href="#"
                className="hover:text-orange-100 text-sm md:text-base"
              >
                <RiInstagramLine />
              </a>
              <a
                href="#"
                className="hover:text-orange-100 text-sm md:text-base"
              >
                <RiYoutubeLine />
              </a>
            </div> */}

            {/* Mobile Menu Toggle */}
            <button
              className="ml-4 md:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? (
                <RiCloseLine size={20} />
              ) : (
                <RiInfoCardLine size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && showMobileMenu && (
          <div className="container mx-auto px-4 pt-3 pb-2 border-t border-orange-400 mt-2">
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:info@gujrattourpackage.com"
                className="flex items-center hover:text-orange-100"
              >
                <RiMailLine className="mr-2" />
                <span>info@gujrattourpackage.com</span>
              </a>
              <a
                href="https://wa.me/+919898895766"
                className="flex items-center hover:text-orange-100"
              >
                <RiPhoneLine className="mr-2" />
                <span>+91 9998 768210</span>
              </a>
              <div className="text-xs pt-1">
                Gujarat tour package, Ahmedabad, Gujarat
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopHeader;
