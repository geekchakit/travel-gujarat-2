import React from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkedAlt,
  FaCheckCircle,
  FaPhoneAlt,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";
import {
  MdOutlineDirectionsCar,
  MdOutlineLocalHotel,
  MdOutlineFlight,
  MdOutlinePhotoCamera,
  MdOutlineRestaurant,
} from "react-icons/md";

// Tour package data
const tourPackagesData = [
  {
    id: 1,
    title: "Statue of Unity Deluxe Package",
    image: "/hero-banner-bg.webp",
    nights: 2,
    days: 3,
    price: 5999,
    originalPrice: 6958,
    discount: 16,
    route: "Ahmedabad - Vadodara - Statue of Unity - Ahmedabad Drop",
    inclusions: [
      "2 Nights stay in Vadodara",
      "Welcome Drink on Arrival (Non Alcoholic)",
      "Meal Plan Breakfast & Dinner",
      "All Sightseeing in Private Cab",
      "Accommodation : On DBL sharing at all the location in Vadodara - Deluxe room",
      "Kevadia City Tour Sightseeing",
      "Toll Tax and Parking Charges, Fuel Charges Include",
    ],
    hasFlights: false,
  },
  {
    id: 2,
    title: "Jyotirlinga Package",
    image: "/hero-banner-bg.webp",
    nights: 3,
    days: 4,
    price: 8499,
    originalPrice: 9858,
    discount: 16,
    route: "Dwarka(1N) | Somnath(1N) | Rajkot(1N)",
    inclusions: [
      "Welcome Drink on Arrival (Non Alcoholic)",
      "Meal Plan Breakfast & Dinner",
      "Accommodation for 3 Nights",
      "All Sightseeing in Private Cab",
      "Accommodation: On DBL sharing at all the location in Luxury Rooms",
      "Toll Tax and Parking Charges, Fuel Charges Include",
    ],
    hasFlights: false,
  },
  {
    id: 3,
    title: "Rann of Kutch Desert Adventure",
    image: "/hero-banner-bg.webp",
    nights: 4,
    days: 5,
    price: 9999,
    originalPrice: 11499,
    discount: 15,
    route:
      "Ahmedabad - Bhuj - Great Rann of Kutch - Dholavira - Ahmedabad Drop",
    inclusions: [
      "4 Nights Accommodation in Hotels",
      "Welcome Drink on Arrival (Non Alcoholic)",
      "Meal Plan Breakfast & Dinner",
      "All Sightseeing in Private Cab",
      "White Rann Visit with Cultural Program",
      "Accommodation: On DBL sharing at all locations",
      "Toll Tax and Parking Charges, Fuel Charges Include",
    ],
    hasFlights: true,
  },
  {
    id: 4,
    title: "Gir Wildlife Safari",
    image: "/hero-banner-bg.webp",
    nights: 3,
    days: 4,
    price: 7499,
    originalPrice: 8799,
    discount: 14,
    route: "Ahmedabad - Junagadh - Gir National Park - Ahmedabad Drop",
    inclusions: [
      "3 Nights Accommodation in Hotels",
      "Welcome Drink on Arrival (Non Alcoholic)",
      "Meal Plan Breakfast & Dinner",
      "All Sightseeing in Private Cab",
      "2 Safari trips to Gir National Park",
      "Accommodation: On DBL sharing at all locations",
      "Toll Tax and Parking Charges, Fuel Charges Include",
    ],
    hasFlights: false,
  },
];

// Individual Tour Package Card component
const TourPackageCard = ({ packageData }) => {
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

  // Split inclusions into two columns for better display
  const midpoint = Math.ceil(inclusions.length / 2);
  const firstColumnInclusions = inclusions.slice(0, midpoint);
  const secondColumnInclusions = inclusions.slice(midpoint);

  return (
    <div className="max-w-6xl mx-auto mb-10 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
      <div className="flex flex-col md:flex-row">
        {/* Left Section - Image */}
        <div className="md:w-1/3 relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            style={{ minHeight: "340px" }}
          />

          {/* Discount tag */}
          <div className="absolute top-6 right-0 bg-red-600 text-white font-bold py-1.5 px-4 shadow-lg rounded-l-md text-sm">
            DISCOUNT {discount}%
          </div>
        </div>

        {/* Middle Section - Package Details */}
        <div className="md:w-2/5 p-6 border-r border-gray-200">
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-2xl font-bold text-gray-700">{title}</h2>
          </div>

          <div className="flex items-center gap-4 mb-5 text-sm text-gray-500">
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
            <h3 className="text-lg font-medium bg-gray-50 p-2.5 mb-4 text-gray-700 rounded">
              Package Inclusions
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
              {/* First column of inclusions */}
              <div className="space-y-3">
                {firstColumnInclusions.map((inclusion, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheckCircle className="text-green-600 mt-1 mr-2.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{inclusion}</span>
                  </div>
                ))}
              </div>

              {/* Second column of inclusions */}
              <div className="space-y-3">
                {secondColumnInclusions.map((inclusion, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheckCircle className="text-green-600 mt-1 mr-2.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{inclusion}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="flex justify-between pt-4 border-t border-gray-200">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-700 mb-1 shadow-sm">
                <MdOutlineDirectionsCar size={22} />
              </div>
              <span className="text-xs font-medium text-gray-600">
                Transfer
              </span>
            </div>
            <div
              className={`flex flex-col items-center ${
                hasFlights ? "" : "opacity-40"
              }`}
            >
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-700 mb-1 shadow-sm">
                <MdOutlineFlight size={22} />
              </div>
              <span className="text-xs font-medium text-gray-600">Flights</span>
            </div>
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

        {/* Right Section - Pricing & CTA */}
        <div className="md:w-1/4 p-6 flex flex-col justify-between bg-slate-50">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="text-3xl font-bold text-gray-900">
                ₹{price.toLocaleString()}
              </div>
              <div className="text-red-500 line-through text-lg font-medium">
                ₹{originalPrice.toLocaleString()}
              </div>
            </div>
            <div className="text-gray-600 text-sm mb-6 font-medium">
              Price Per Adult
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-3">
                <FaMapMarkedAlt className="text-indigo-600 mr-2" />
                <span className="text-sm font-semibold text-gray-700">
                  Starting Point
                </span>
              </div>
              <p className="text-sm text-gray-600 pl-6 leading-relaxed">
                {route}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <a
              href="tel:+919999233932"
              className="flex items-center justify-center gap-2 py-3 px-4 bg-indigo-50 border border-indigo-100 text-indigo-700 font-medium rounded-md hover:bg-indigo-100 transition-colors w-full"
            >
              <FaPhoneAlt />
              <span>+91 9999233932</span>
            </a>

            <a
              href="https://wa.me/919999233932"
              className="flex items-center justify-center gap-2 py-3 px-4 bg-green-50 border border-green-100 text-green-700 font-medium rounded-md hover:bg-green-100 transition-colors w-full"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>

            <button className="flex items-center justify-center gap-2.5 py-3.5 px-4 bg-amber-500 text-white font-semibold rounded-md hover:bg-amber-600 transition-colors w-full shadow-sm">
              <FaPaperPlane />
              <span>Send Enquiry</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main component without pagination
const OurTourPackages = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Discover <span className="text-indigo-700">Gujarat</span> Tour
            Packages
          </h1>
          <div className="w-24 h-1.5 bg-amber-500 mx-auto my-5 rounded"></div>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Experience the culture, heritage and beauty of Gujarat with our
            carefully curated tour packages
          </p>
        </div>

        {/* Display all tour packages without pagination */}
        {tourPackagesData.map((packageData) => (
          <TourPackageCard key={packageData.id} packageData={packageData} />
        ))}
      </div>
    </div>
  );
};

export default OurTourPackages;
