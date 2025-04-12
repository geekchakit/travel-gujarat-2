import React from "react";
import {
  RiPhoneFill,
  RiMailFill,
  RiMapPin2Fill,
  RiFacebookCircleFill,
  RiTwitterFill,
  RiInstagramFill,
  RiYoutubeFill,
  RiWhatsappFill,
  RiArrowRightLine,
} from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white">
      {/* Creative Banner with Image Integration */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text Content */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Ready to Explore{" "}
                <span className="text-indigo-600">Gujarat</span>?
              </h2>
              <p className="text-gray-600 mb-8 max-w-lg">
                From the sacred temples of Dwarka and Somnath to the iconic
                Statue of Unity, let Gujarat tour package guide you through
                Gujarat’s spiritual and cultural wonders.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/+919998768210"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition transform hover:-translate-y-1"
                >
                  <span>Contact Now</span>
                  <RiArrowRightLine className="ml-2" />
                </a>
                <a
                  href="https://gujrattourpackage.com/"
                  className="inline-flex items-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition transform hover:-translate-y-1"
                >
                  Browse Tours
                </a>
              </div>
            </div>

            {/* Decorative Image */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative h-64 md:h-80 overflow-hidden rounded-xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/hero-banner-bg.webp"
                  alt="Gujarat Tourism"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="bg-white/90 text-indigo-800 px-4 py-2 rounded-full text-sm font-bold">
                    Discover Gujarat
                  </span>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-indigo-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold">Gujarat tour package</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Crafting unforgettable Gujarat journeys since 2022. Your trusted
                partner for spiritual and cultural travel experiences.
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="text-indigo-500 hover:text-indigo-700 text-xl"
                >
                  <RiFacebookCircleFill />
                </a>
                <a
                  href="#"
                  className="text-indigo-500 hover:text-indigo-700 text-xl"
                >
                  <RiTwitterFill />
                </a>
                <a
                  href="#"
                  className="text-indigo-500 hover:text-indigo-700 text-xl"
                >
                  <RiInstagramFill />
                </a>
                <a
                  href="#"
                  className="text-indigo-500 hover:text-indigo-700 text-xl"
                >
                  <RiYoutubeFill />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                Explore
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://gujrattourpackage.com/"
                    className="text-gray-600 hover:text-indigo-600 transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://gujrattourpackage.com/"
                    className="text-gray-600 hover:text-indigo-600 transition"
                  >
                    Tour Packages
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 transition"
                  >
                    Destinations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 transition"
                  >
                    Photo Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 transition"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Popular Tours */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                Top Experiences
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://gujrattourpackage.com/"
                    className="text-gray-600 hover:text-indigo-600 transition"
                  >
                    Dwarka Somnath Tour
                  </a>
                </li>
                <li>
                  <a
                    href="https://gujrattourpackage.com/"
                    className="text-gray-600 hover:text-indigo-600 transition"
                  >
                    Statue of Unity
                  </a>
                </li>
                <li>
                  <a
                    href="https://gujrattourpackage.com/"
                    className="text-gray-600 hover:text-indigo-600 transition"
                  >
                    Panch Dwarka Tour
                  </a>
                </li>
                <li>
                  <a
                    href="https://gujrattourpackage.com/"
                    className="text-gray-600 hover:text-indigo-600 transition"
                  >
                    Rann Utsav
                  </a>
                </li>
                <li>
                  <a
                    href="https://gujrattourpackage.com/"
                    className="text-gray-600 hover:text-indigo-600 transition"
                  >
                    Diu Bhavnagar
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info with Card-style */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                Reach Us
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <RiMapPin2Fill className="text-indigo-600 text-lg flex-shrink-0 mt-1 mr-3" />
                    <span className="text-gray-600 text-sm">
                      409 Titanium City Centre Mall, Anand Nagar, Ahmedabad,
                      Gujarat 380017
                    </span>
                  </li>
                  <li className="flex items-start">
                    <RiMapPin2Fill className="text-indigo-600 text-lg flex-shrink-0 mt-1 mr-3" />
                    <span className="text-gray-600 text-sm">
                      SA-12/52-R-1-A, Buddhacity Colony, Sarnath, Varanasi,
                      Uttar Pradesh 221007
                    </span>
                  </li>
                  <li className="flex items-start">
                    <RiMapPin2Fill className="text-indigo-600 text-lg flex-shrink-0 mt-1 mr-3" />
                    <span className="text-gray-600 text-sm">
                      3rd Floor, 41 A, Syed Amir Ali Ave, Park Circus, Kolkata,
                      West Bengal 700019
                    </span>
                  </li>
                  <li className="flex items-center">
                    <RiPhoneFill className="text-indigo-600 text-lg flex-shrink-0 mr-3" />
                    <span className="text-gray-600 text-sm">
                      +91 9998768210
                    </span>
                  </li>
                  <li className="flex items-center">
                    <RiMailFill className="text-indigo-600 text-lg flex-shrink-0 mr-3" />
                    <span className="text-gray-600 text-sm">
                      info@gujrattourpackage.com
                    </span>
                  </li>
                  <li className="flex items-center">
                    <RiWhatsappFill className="text-green-600 text-lg flex-shrink-0 mr-3" />
                    <span className="text-gray-600 text-sm">
                      +91 9998768210
                    </span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <a
                    href="https://gujrattourpackage.com/"
                    className="text-indigo-600 text-sm font-medium hover:text-indigo-800 transition flex items-center"
                  >
                    Send us a message
                    <RiArrowRightLine className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Gujarat tour package. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
