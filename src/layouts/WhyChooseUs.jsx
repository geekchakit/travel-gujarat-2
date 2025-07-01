import React from "react";
import {
  FaPaperPlane,
  FaComments,
  FaUsers,
  FaClock,
  FaLayerGroup,
  FaCamera,
  FaHotel
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaPaperPlane className="w-10 h-10" />,
      title: "Start Your Journey Here",
      description: "with the Number #1 Travel Company",
    },
    {
      icon: <FaComments className="w-10 h-10" />,
      title: "Your Dream Vacation Awaits",
      description: "with Ahmedabad's Top Travel Agency",
    },
    {
      icon: <FaUsers className="w-10 h-10" />,
      title: "Dedicated Travel Experts",
      description: "Ready to Serve You",
    },
    {
      icon: <FaClock className="w-10 h-10" />,
      title: "24/7 Support",
      description: "Always There When You Need Us",
    },
    {
      icon: <FaLayerGroup className="w-10 h-10" />,
      title: "Save Time",
      description: "SAVE TIME-GET PERFECT PLAN WITH EXPERT AND SAVE TIME",
    },
    {
      icon: <FaHotel className="w-10 h-10" />,
      title: "Best Hotels & Resorts",
      description: "TRUSTED NETWORK-500+RELIABLE HOTELS AND NETWORK",
    },
  ];

  return (
    <div className="bg-white">
      {/* Why Choose Us Section */}
      <div className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Why Choose <span className="text-orange-500">Us</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 text-center border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Us Section - Gujarat tour package */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500 rounded-lg transform translate-x-4 translate-y-4"></div>
                <img
                  src="/hero-banner-bg.webp"
                  alt="Gujarat Tourism"
                  className="relative z-10 w-full rounded-lg shadow-lg object-cover h-80"
                />
                <div className="absolute right-0 bottom-0 bg-white py-2 px-4 rounded-tl-lg font-semibold text-orange-500 shadow-md z-20 transform translate-y-6">
                  Since 2022
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="w-full md:w-1/2 mt-12 md:mt-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                About{" "}
                <span className="text-orange-500">Gujarat tour package</span>
              </h2>

              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Founded in 2022, Gujarat tour package is a premier travel agency
                located in Ahmedabad, Gujarat, offering a variety of domestic
                and international vacation packages. Our mission is to make
                travel enjoyable, economical, and hassle-free for all our
                clients.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-8">
                {[
                  // "Locally owned & operated",
                  // "Customized itineraries",
                  "Affordable packages",
                  "Hassle-free planning",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <MdVerified className="text-orange-500 flex-shrink-0 w-6 h-6" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href=""
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  Contact Us
                </a>
              </div>

              <div className="mt-8 p-4 bg-orange-50 rounded-lg border border-orange-100">
                <p className="text-sm text-gray-600 italic">
                  Note: The number of passengers, travel date, and season all
                  affect the tour package's cost. Please get in touch with our
                  sales team for a final quote; the prices listed are merely
                  suggestions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
