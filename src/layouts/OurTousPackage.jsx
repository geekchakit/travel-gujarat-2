// src/components/OurTourPackages.js
import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkedAlt,
  FaCheckCircle,
  FaWhatsapp,
  FaPaperPlane,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import {
  MdOutlineDirectionsCar,
  MdOutlineLocalHotel,
  MdOutlineFlight,
  MdOutlinePhotoCamera,
  MdOutlineRestaurant,
} from "react-icons/md";
import { useForm } from "../context/FormContext";
import { RiPhoneFill } from "react-icons/ri";

// Tour package data
// const tourPackagesData = [
//   {
//     id: 1,
//     title: "DWARKA SOMNATH JYOTRILINGA TOUR",
//     image: "/hero-banner-bg.webp",
//     nights: 3,
//     days: 4,
//     price: 8299,
//     originalPrice: 6999,
//     // 20%
//     route: "Dwarka (2N) - Somnath (1N) - Drop",
//     inclusions: [
//       "(2N) DWARKA | (1N) SOMNATH",
//       "MEAL PLAN BREAKFAST OR DINNER",
//       "ACCOMMODATION ON DBL SHARING FOR 3 NIGHTS",
//       "DELUXE ROOM TYPE IN ALL THE LOCATION",
//       "ALL SIGHTSEEING IN PRIVATE CAB",
//       "TOLL, PARKING, DRIVER ALLOWANCE AND FUEL CHARGES ARE INCLUDED",
//     ],
//     hasFlights: false,
//   },
//   {
//     id: 2,
//     title: "GUJARAT TEMPLE TOUR 4NIGHTS 5DAYS",
//     image: "/Amheadbad.webp",
//     nights: 4,
//     days: 5,
//     price: 11850,
//     originalPrice: 7999,
//     // 18%
//     route: "Dwarka (2N) - Somnath (1N) - Ahmedabad (1N) - Drop",
//     inclusions: [
//       "(2N) DWARKA | (1N) SOMNATH | (1N) AHMEDABAD",
//       "MEAL PLAN BREAKFAST OR DINNER",
//       "ACCOMMODATION ON DBL SHARING FOR 4 NIGHTS",
//       "DELUXE ROOM TYPE IN ALL THE LOCATION",
//       "ALL SIGHTSEEING IN PRIVATE CAB",
//       "TOLL, PARKING, DRIVER ALLOWANCE AND FUEL CHARGES ARE INCLUDED",
//     ],
//     hasFlights: false,
//   },
//   {
//     id: 3,
//     title: "GUJARAT TEMPLE TOUR WITH STATUE OF UNITY",
//     image: "/status of unity.jfif",
//     nights: 5,
//     days: 6,
//     price: 12850,
//     originalPrice: 9999,
//     // 14%
//     route:
//       "Dwarka (2N) - Somnath (1N) - Ahmedabad (1N) - Vadodara (1N) - Drop",
//     inclusions: [
//       "(2N) DWARKA | (1N) SOMNATH | (1N) AHMEDABAD | (1N) VADODARA",
//       "MEAL PLAN BREAKFAST OR DINNER",
//       "ACCOMMODATION ON DBL SHARING FOR 5 NIGHTS",
//       "DELUXE ROOM TYPE IN ALL THE LOCATION",
//       "ALL SIGHTSEEING IN PRIVATE CAB",
//       "TOLL, PARKING, DRIVER ALLOWANCE AND FUEL CHARGES ARE INCLUDED",
//     ],
//     hasFlights: false,
//   },
//   {
//     id: 4,
//     title: "PANCH DWARKA DARSHAN TOUR PACKAGE",
//     image: "/panch-dwarka.jpg",
//     nights: 7,
//     days: 8,
//     price: 16250,
//     originalPrice: 9999,
//     // 14%
//     route:
//       "Dwarka (2N) - Somnath (1N) - Ahmedabad (1N) - Vadodara (1N) - Drop",
//     inclusions: [
//       "(2N) DWARKA | (1N) SOMNATH | (1N) AHMEDABAD | (1N) VADODARA | (2N) UDAIPUR",
//       "MEAL PLAN BREAKFAST OR DINNER",
//       "ACCOMMODATION ON DBL SHARING FOR 4 NIGHTS",
//       "DELUXE ROOM TYPE IN ALL THE LOCATION",
//       "ALL SIGHTSEEING IN PRIVATE CAB",
//       "TOLL, PARKING, DRIVER ALLOWANCE AND FUEL CHARGES ARE INCLUDED",
//     ],
//     hasFlights: false,
//   },
// ];

const tourPackagesData = [
  {
    id: 5, // Start from 5 to avoid duplicate IDs
    title: "AHMEDABAD STATUE OF UNITY TOUR",
    image: "/status of unity.jfif", // You can update this path as needed
    nights: 2,
    days: 3,
    price: 5750,
    originalPrice: 5750,
    route: "Ahmedabad (1N) - Vadodara (1N) - Drop",
    inclusions: [
      "(1N) AHMEDABAD | (1N) VADODARA",
      "MEAL PLAN BREAKFAST OR DINNER",
      "ACCOMMODATION ON DBL SHARING FOR 2 NIGHTS",
      "DELUXE ROOM TYPE IN ALL THE LOCATION",
      "ALL SIGHTSEEING IN PRIVATE CAB",
      "TOLL, PARKING, DRIVER ALLOWANCE AND FUEL CHARGES ARE INCLUDED",
    ],
    hasFlights: false,
  },
  {
    id: 1,
    title: "DWARKA SOMNATH JYOTRILINGA TOUR",
    image: "/hero-banner-bg.webp",
    nights: 3,
    days: 4,
    price: 8299,
    originalPrice: 6999,
    route: "Dwarka (2N) - Somnath (1N) - Drop",
    inclusions: [
      "(2N) DWARKA | (1N) SOMNATH",
      "MEAL PLAN BREAKFAST OR DINNER",
      "ACCOMMODATION ON DBL SHARING FOR 3 NIGHTS",
      "DELUXE ROOM TYPE IN ALL THE LOCATION",
      "ALL SIGHTSEEING IN PRIVATE CAB",
      "TOLL, PARKING, DRIVER ALLOWANCE AND FUEL CHARGES ARE INCLUDED",
    ],
    hasFlights: false,
  },
  {
    id: 2,
    title: "GUJARAT TEMPLE TOUR 4NIGHTS 5DAYS",
    image: "/Amheadbad.webp",
    nights: 4,
    days: 5,
    price: 11850,
    originalPrice: 7999,
    route: "Dwarka (2N) - Somnath (1N) - Ahmedabad (1N) - Drop",
    inclusions: [
      "(2N) DWARKA | (1N) SOMNATH | (1N) AHMEDABAD",
      "MEAL PLAN BREAKFAST OR DINNER",
      "ACCOMMODATION ON DBL SHARING FOR 4 NIGHTS",
      "DELUXE ROOM TYPE IN ALL THE LOCATION",
      "ALL SIGHTSEEING IN PRIVATE CAB",
      "TOLL, PARKING, DRIVER ALLOWANCE AND FUEL CHARGES ARE INCLUDED",
    ],
    hasFlights: false,
  },
  {
    id: 3,
    title: "GUJARAT TEMPLE TOUR WITH STATUE OF UNITY",
    image: "/status of unity.jfif",
    nights: 5,
    days: 6,
    price: 12850,
    originalPrice: 9999,
    route: "Dwarka (2N) - Somnath (1N) - Ahmedabad (1N) - Vadodara (1N) - Drop",
    inclusions: [
      "(2N) DWARKA | (1N) SOMNATH | (1N) AHMEDABAD | (1N) VADODARA",
      "MEAL PLAN BREAKFAST OR DINNER",
      "ACCOMMODATION ON DBL SHARING FOR 5 NIGHTS",
      "DELUXE ROOM TYPE IN ALL THE LOCATION",
      "ALL SIGHTSEEING IN PRIVATE CAB",
      "TOLL, PARKING, DRIVER ALLOWANCE AND FUEL CHARGES ARE INCLUDED",
    ],
    hasFlights: false,
  },
  {
    id: 4,
    title: "PANCH DWARKA DARSHAN TOUR PACKAGE",
    image: "/pancha dwarka.jpg",
    nights: 7,
    days: 8,
    price: 16250,
    originalPrice: 9999,
    route: "Dwarka (2N) - Somnath (1N) - Ahmedabad (1N) - Vadodara (1N) - Drop",
    inclusions: [
      "(2N) DWARKA | (1N) SOMNATH | (1N) AHMEDABAD | (1N) VADODARA | (2N) UDAIPUR",
      "MEAL PLAN BREAKFAST OR DINNER",
      "ACCOMMODATION ON DBL SHARING FOR 4 NIGHTS",
      "DELUXE ROOM TYPE IN ALL THE LOCATION",
      "ALL SIGHTSEEING IN PRIVATE CAB",
      "TOLL, PARKING, DRIVER ALLOWANCE AND FUEL CHARGES ARE INCLUDED",
    ],
    hasFlights: false,
  },
  {
    id: 6,
    title: "BEACH AND WILDLIFE TOUR (SASAN GIR & DIU)",
    image: "/sasan-gir-diu.jpg",
    nights: 4,
    days: 5,
    price: 11850,
    originalPrice: 11850,
    route: "Sasan Gir (2N) - Diu (2N) - Drop",
    inclusions: [
      "(2N) SAASAN | (2N) GIR",
      "MEAL PLAN BREAKFAST OR DINNER",
      "ACCOMMODATION ON DBL SHARING FOR 4 NIGHTS",
      "DELUXE ROOM TYPE IN ALL THE LOCATION",
      "ALL SIGHTSEEING IN PRIVATE CAB",
      "TOLL, PARKING, DRIVER ALLOWANCE AND FUEL CHARGES ARE INCLUDED",
    ],
    hasFlights: false,
  },
  {
    id: 7,
    title: "PILGRIMAGE TOUR OF GUJARAT",
    image: "/pancha dwarka.jpg",
    nights: 7,
    days: 8,
    price: 13800,
    originalPrice: 13800,
    route: "Dwarka (2N) - Somnath (1N) - Sasan (1N) - Diu (1N) - Bhavnagar (1N) - Ahmedabad (1N) - Drop",
    inclusions: [
      "(2N) DWARKA | (1N) SOMNATH | (1N) SAASAN | (1N) DIU | (1N) BHAVNAGAR | (1N) AHEMADABAD",
      "MEAL PLAN BREAKFAST OR DINNER",
      "ACCOMMODATION ON DBL SHARING FOR 7 NIGHTS",
      "DELUXE ROOM TYPE IN ALL THE LOCATION",
      "ALL SIGHTSEEING IN PRIVATE CAB",
      "TOLL, PARKING, DRIVER ALLOWANCE AND FUEL CHARGES ARE INCLUDED",
    ],
    hasFlights: false,
  },
  {
    id: 8,
    title: "SAURASHTRA DARSHAN WITH SASANGIR",
    image: "/junagarh.jpg",
    nights: 5,
    days: 6,
    price: 10650,
    originalPrice: 10650,
    route: "Dwarka (2N) - Somnath (1N) - Sasan (1N) - Junagadh (1N) - Drop",
    inclusions: [
      "(2N) DWARKA | (1N) SOMNATH | (1N) SAASAN | (1N) JUNAGADH",
      "MEAL PLAN BREAKFAST OR DINNER",
      "ACCOMMODATION ON DBL SHARING FOR 5 NIGHTS",
      "DELUXE ROOM TYPE IN ALL THE LOCATION",
      "ALL SIGHTSEEING IN PRIVATE CAB",
      "TOLL, PARKING, DRIVER ALLOWANCE AND FUEL CHARGES ARE INCLUDED",
    ],
    hasFlights: false,
  },
];


const TourPackageCard = ({ packageData }) => {
  const { openForm } = useForm();
  const [showAllInclusions, setShowAllInclusions] = useState(false);

  const {
    title,
    image,
    nights,
    days,
    price,
    originalPrice,
    discount,
    route,
    inclusions,
    hasFlights,
  } = packageData;

  const visibleInclusions = showAllInclusions
    ? inclusions
    : inclusions.slice(0, 3);

  // Handle click on "Send Enquiry" button
  const handleEnquiryClick = () => {
    // For mobile screens (below lg breakpoint), toggle the form
    if (window.innerWidth < 1024) {
      openForm(); // Opens the mobile slide-up form
    }
    // Always scroll to the Hero section (where the form is on desktop)
    const heroSection = document.querySelector("#hero-section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-6xl mx-auto mb-10 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            style={{ minHeight: "340px" }}
          />
          {/* <div className="absolute top-6 right-0 bg-red-600 text-white font-bold py-1.5 px-4 shadow-lg rounded-l-md text-sm">
            DISCOUNT {discount}%
          </div> */}
        </div>

        <div className="md:w-2/5 p-6 border-r border-gray-200">
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-2xl font-bold text-gray-700">{title}</h2>
          </div>

          <div className="flex items-center gap-4 mb-5 text-base text-gray-700 font-medium">
            <div className="flex items-center">
              <FaCalendarAlt className="text-amber-500 mr-2" />
              <span className="font-medium">{nights} Nights</span>
            </div>
            <div className="flex items-center">
              <FaClock className="text-amber-500 mr-2" />
              <span className="font-medium">{days} Days</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium bg-indigo-50 p-3 mb-4 text-indigo-800 rounded-md shadow-sm border-l-4 border-indigo-500">
              Package Inclusions
            </h3>

            <div className="space-y-3">
              {inclusions.map((inclusion, index) => (
                <div
                  key={index}
                  className="flex items-start bg-gradient-to-r from-amber-50 to-transparent p-2 rounded-md border-l-2 border-amber-400"
                >
                  <FaCheckCircle className="text-green-600 mt-1 mr-2.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{inclusion}</span>
                </div>
              ))}

              {/* {inclusions.length > 3 && (
                <button
                  onClick={() => setShowAllInclusions(!showAllInclusions)}
                  className="flex items-center mt-2 text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                >
                  {showAllInclusions ? (
                    <>
                      <FaChevronUp className="mr-1" />
                      Read Less
                    </>
                  ) : (
                    <>
                      <FaChevronDown className="mr-1" />
                      Read More ({inclusions.length - 3} more)
                    </>
                  )}
                </button>
              )} */}
            </div>
          </div>
        </div>

        <div className="md:w-1/4 p-6 flex flex-col justify-between bg-slate-50">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="text-lg font-bold text-gray-900">
                ₹{price.toLocaleString()}
              </div>
              {/* <div className="text-red-500 line-through text-lg font-medium">
                ₹{originalPrice.toLocaleString()}
              </div> */}
            </div>
            <div className="text-gray-600 text-sm mb-6 font-medium">
              Price Per Adult
            </div>

            {/* <div className="mb-6">
              <div className="flex items-center mb-3">
                <FaMapMarkedAlt className="text-indigo-600 mr-2" />
                <span className="text-sm font-semibold text-gray-700">
                  Tour Highlights
                </span>
              </div>
              <div className="bg-indigo-50 p-3 rounded-md border-l-3 border-indigo-400 shadow-sm">
                <p className="text-sm text-gray-700 font-medium leading-relaxed">
                  {route}
                </p>
              </div>
            </div> */}
          </div>

          <div className="space-y-4">
            {/* <a
              href="tel:+919898895766"
              className="flex items-center justify-center gap-2 py-3.5 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors w-full shadow-md"
            >
              <RiPhoneFill />
              <span>Call Us</span>
            </a> */}
            <a
              href="https://wa.me/+919898895766"
              className="flex items-center justify-center gap-2 py-3.5 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors w-full shadow-md"
            >
              <FaWhatsapp size={18} />
              {/* <span> Get Full Details in whatsaap</span> */}
              <span>+91 98988 95766</span>
            </a>
            <button
              onClick={handleEnquiryClick} // Use the new handler
              className="flex items-center justify-center gap-2.5 py-3.5 px-4 bg-gradient-to-r from-indigo-700 to-indigo-900 text-white font-semibold rounded-md hover:from-indigo-800 hover:to-indigo-900 transition-all w-full shadow-md"
            >
              <FaPaperPlane />
              <span>Send Enquiry</span>
            </button>
          </div>
          <div className="flex justify-between pt-4 border-t border-gray-200">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-700 mb-1 shadow-sm">
                <MdOutlineDirectionsCar size={22} />
              </div>
              <span className="text-xs font-medium text-gray-600">
                Transfer
              </span>
            </div>
            {/* <div
              className={`flex flex-col items-center ${
                hasFlights ? "" : "opacity-40"
              }`}
            >
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-700 mb-1 shadow-sm">
                <MdOutlineFlight size={22} />
              </div>
              <span className="text-xs font-medium text-gray-600">Flights</span>
            </div> */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-700 mb-1 shadow-sm">
                <MdOutlineLocalHotel size={22} />
              </div>
              <span className="text-xs font-medium text-gray-600">Hotels</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-700 mb-1 shadow-sm">
                <MdOutlinePhotoCamera size={22} />
              </div>
              <span className="text-xs font-medium text-gray-600">
                Sightseeing
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-700 mb-1 shadow-sm">
                <MdOutlineRestaurant size={22} />
              </div>
              <span className="text-xs font-medium text-gray-600">Meals</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OurTourPackages = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Discover <span className="text-indigo-700">Gujarat </span> Tour
            Packages
          </h1>
          <div className="w-24 h-1.5 bg-amber-500 mx-auto my-5 rounded"></div>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Experience the spiritual and cultural heritage of Gujarat with our
            carefully curated tour packages
          </p>
        </div>

        {tourPackagesData.map((packageData) => (
          <TourPackageCard key={packageData.id} packageData={packageData} />
        ))}
      </div>
    </div>
  );
};

export default OurTourPackages;
