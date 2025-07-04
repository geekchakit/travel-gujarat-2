import React, { useState, useEffect } from "react";
import {
  RiMapPin2Fill,
  RiStarFill,
  RiCheckboxCircleFill,
  RiHeartFill,
  RiUserSmileFill,
  RiGlobalFill,
  RiShieldCheckFill,
  RiAwardFill,
  RiArrowRightLine,
  RiCloseLine,
  RiArrowDownLine,
  RiCalendarFill,
  RiTimeFill,
  RiCarFill,
  RiHotelFill,
  RiRestaurantFill,
  RiCamera2Fill,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import TopHeader from "../layouts/TopHeader";
import { useForm } from "../context/FormContext";
import emailjs from "emailjs-com";

const SaurashtraDarshanTour = () => {
  const { openForm } = useForm();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [expandedDay, setExpandedDay] = useState(null);

const stats = [
  { number: "5N/6D", label: "Duration", icon: RiCalendarFill },
  { number: "4", label: "Cities Covered", icon: RiMapPin2Fill },
  { number: "10+", label: "Attractions", icon: RiCamera2Fill },
  { number: "100%", label: "Spiritual Experience", icon: RiHeartFill },
];

// 3. Update `highlights` array:
const highlights = [
  { icon: RiCheckboxCircleFill, text: "Daily Breakfast only", color: "text-green-600" },
  { icon: RiHotelFill, text: "Comfortable stays at each location", color: "text-blue-600" },
  { icon: RiCarFill, text: "Transfers & driver assistance", color: "text-purple-600" },
  { icon: RiCamera2Fill, text: "All sightseeing as per itinerary", color: "text-orange-600" },
];

// 4. Update `itinerary` array with the new days:
const itinerary = [
    {
        day: 1,
        title: "Ahmedabad - Dwarka",
        summary: "Arrival and transfer to Dwarka via Jamnagar",
        details:
            "Arrival at Ahmedabad, meet and greet from our representative, then transfer to Dwarka. On the way, enjoy sightseeing in Jamnagar including Bala Hanuman Temple, Lakhota Lake, and Lakhota Museum. Continue to Dwarka and accommodation.",
        attractions: [
            "Bala Hanuman Temple",
            "Lakhota Lake",
            "Lakhota Museum"
        ],
        stay: "Dwarka"
    },
    {
        day: 2,
        title: "Dwarka Local",
        summary: "Full day sightseeing of Dwarka's famous temples",
        details:
            "After breakfast, enjoy a full day sightseeing tour of Dwarka, visiting famous temples such as Bheyt Dwarka, Nageshwar Jyotirlinga, Gopi Talav, Bhadkeshwar Temple, Shivarpur Beach, and Rukmani Temple. Return back and accommodation.",
        attractions: [
            "Bheyt Dwarka",
            "Nageshwar Jyotirlinga",
            "Gopi Talav",
            "Bhadkeshwar Temple",
            "Shivarpur Beach",
            "Rukmani Temple"
        ],
        stay: "Dwarka"
    },
    {
        day: 3,
        title: "Dwarka - Porbandar - Somnath",
        summary: "Travel to Somnath via Porbandar",
        details:
            "After breakfast, continue the journey toward Somnath. On the way, enjoy Porbandar sightseeing including Harsiddhimata Temple, Kirti Temple, Madhavpur Beach, Bhalka Tirth, Triveni Sangam, and Somnath Jyotirlinga Darshan. Accommodation at Somnath.",
        attractions: [
            "Harsiddhimata Temple",
            "Kirti Temple",
            "Madhavpur Beach",
            "Bhalka Tirth",
            "Triveni Sangam",
            "Somnath Jyotirlinga"
        ],
        stay: "Somnath"
    },
    {
        day: 4,
        title: "Somnath - Sasangir - Junagadh",
        summary: "Journey to Sasangir and accommodation",
        details:
            "After breakfast, continue the journey toward Sasangir. Accommodation.",
        attractions: [],
        stay: "Junagadh"
    },
    {
        day: 5,
        title: "Junagadh - Virpur - Gondal - Ahmedabad",
        summary: "Junagadh sightseeing and return to Ahmedabad",
        details:
            "After breakfast, visit Junagadh local sightseeing including Girnar Hill, Junagadh Fort, and Mahabat Maqbara. On the way, visit Jalaram Temple and Navlakha Palace. Accommodation at Ahmedabad.",
        attractions: [
            "Girnar Hill",
            "Junagadh Fort",
            "Mahabat Maqbara",
            "Jalaram Temple",
            "Navlakha Palace"
        ],
        stay: "Ahmedabad"
    },
    {
        day: 6,
        title: "Ahmedabad Local & Drop",
        summary: "Ahmedabad sightseeing and departure",
        details:
            "After breakfast, visit Ahmedabad sightseeing including Akshardham Temple, Sabarmati Ashram, Adalaj Stepwell, and Trimandir. Drop at your preferred location.",
        attractions: [
            "Akshardham Temple",
            "Sabarmati Ashram",
            "Adalaj Stepwell",
            "Trimandir"
        ],
        stay: "Departure"
    }
];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isFormOpen) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isFormOpen]);

  const handleEnquiryClick = () => {
    if (window.innerWidth < 1024) {
      openForm();
    }
    const heroSection = document.querySelector("#hero-section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: e.target.fullName.value,
      contact_no: e.target.contactNumber.value,
      email_id: e.target.emailAddress.value,
      website: "Saurashtra Darshan Tour",
    };

    emailjs
      .send(
        "service_v2o5j0l",
        "template_apvv4kv",
        templateParams,
        "3w5lxrQSjLVVLUx6_"
      )
      .then(
        () => {
          alert("Your Response Has been submitted!");
        },
        () => {
          alert("Something went wrong. Please try again.");
        }
      );
  };

  const toggleDay = (dayIndex) => {
    setExpandedDay(expandedDay === dayIndex ? null : dayIndex);
  };

  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
      <Header />
      
      {/* Hero Section with Form */}
      <section id="hero-section" className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-red-600 to-pink-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-white">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <RiStarFill className="text-yellow-400 mr-2" />
                <span className="text-sm font-medium">Spiritual Journey</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Saurashtra Darshan Tour
                <span className="...">5 Nights 6 Days</span>

              </h1>
              <p className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed">
                Exploring Gujarat presents a distinctive blend of historical importance, cultural depth, spirituality, and picturesque scenery. Dwarka, recognized as one of India's holiest cities, carries profound spiritual significance. Often called the "Kingdom of Lord Krishna," it is one of the four Char Dham pilgrimage sites, drawing devotees from around the world. Somnath is another vital spiritual location, renowned for the Somnath Temple, which is one of the 12 Jyotirlingas dedicated to Lord Shiva. Located by the Arabian Sea, this temple has undergone numerous renovations over the years and is admired for its exquisite architecture and rich historical relevance.
              </p>
              
              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <highlight.icon className={`${highlight.color} text-lg mr-3 flex-shrink-0`} />
                    <span className="text-sm text-white">{highlight.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/+919898895766"
                  className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Book Now
                  <RiArrowRightLine className="ml-2" />
                </a>
                <button
                  onClick={handleEnquiryClick}
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
                >
                  Get Free Quote
                </button>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md mx-auto">
                <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white text-center py-6 px-6">
                  <h2 className="text-2xl font-bold">Get Your Quote</h2>
                  <p className="text-teal-100 mt-2">Plan your spiritual journey today</p>
                </div>

                <div className="p-8">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name*"
                        required
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="emailAddress"
                        placeholder="Email Address"
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="contactNumber"
                        placeholder="Mobile Number*"
                        required
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                    >
                      Send Enquiry
                    </button>

                    <p className="text-xs text-center text-gray-500">
                      By clicking submit query I accept the{" "}
                      <a href="/privacy-policy" className="text-teal-600 hover:underline">
                        privacy policy
                      </a>
                      .
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400/20 rounded-full blur-xl"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-2xl" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Summary */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-6">
                <RiHeartFill className="mr-2" />
                <span className="font-medium">Tour Overview</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                A Sacred Journey Through Gujarat
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="prose prose-lg text-gray-700 space-y-6">
    <p>
      Exploring Gujarat presents a distinctive blend of historical importance, cultural depth, spirituality, and picturesque scenery. Dwarka, recognized as one of India's holiest cities, carries profound spiritual significance. Often called the "Kingdom of Lord Krishna," it is one of the four Char Dham pilgrimage sites, drawing devotees from around the world.
    </p>
    <p>
      Somnath is another vital spiritual location, renowned for the Somnath Temple, which is one of the 12 Jyotirlingas dedicated to Lord Shiva. Located by the Arabian Sea, this temple has undergone numerous renovations over the years and is admired for its exquisite architecture and rich historical relevance.
    </p>
    <p>
      Note: This tour package is customizable based on your preferences. Reach out today to tailor your spiritual journey!
    </p>

                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-200">
                <div className="flex items-start">
                  <RiCheckboxCircleFill className="text-orange-600 text-2xl mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Customizable Itinerary</h3>
                    <p className="text-gray-600">
                    This tour package can be tailored to your preferences. Don't hesitate to adjust the itinerary to match your needs. Contact us today to secure your memorable spiritual adventure!
                    </p>
                  </div>
                </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/hero-banner-bg.webp"
                  alt="Gujarat Temples"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center">
                    <RiStarFill className="text-yellow-500 text-xl mr-3" />
                    <span className="text-gray-800 font-semibold">Sacred Temples & Divine Experiences</span>
                    </div>
                  </div>
                </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-400/30 rounded-full blur-lg"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-400/30 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Itinerary */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-6">
                <RiCalendarFill className="mr-2" />
                <span className="font-medium">Day by Day</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Detailed Itinerary
              </h2>
              <p className="text-xl text-gray-600">
                Explore each day of your spiritual journey through Gujarat's sacred destinations
              </p>
            </div>
            
            <div className="space-y-6">
              {itinerary.map((day, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                  <div 
                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleDay(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                          {day.day}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{day.title}</h3>
                          <p className="text-gray-600 mt-1">{day.summary}</p>
                        </div>
                      </div>
                      <div className="text-orange-600">
                        {expandedDay === index ? <RiArrowUpSLine size={24} /> : <RiArrowDownSLine size={24} />}
                      </div>
                    </div>
                  </div>
                  
                  {expandedDay === index && (
                    <div className="border-t border-gray-100 p-6 bg-gradient-to-r from-orange-50 to-red-50">
                      <p className="text-gray-700 mb-6 leading-relaxed">{day.details}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <RiCamera2Fill className="text-orange-600 mr-2" />
                          Key Attractions
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {day.attractions.map((attraction, idx) => (
                            <div key={idx} className="flex items-center">
                              <RiCheckboxCircleFill className="text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">{attraction}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <RiHotelFill className="text-orange-600 mr-2" />
                        <span className="font-medium text-gray-800">Stay: </span>
                        <span className="text-gray-700 ml-1">{day.stay}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready for Your Spiritual Journey?
                </h2>
                <p className="text-xl text-orange-100 leading-relaxed mb-8">
                  Book your Gujarat Temple Tour today and embark on a transformative spiritual experience through the land of Lord Krishna and ancient traditions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/+919898895766"
                    className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Book Now on WhatsApp
                    <RiArrowRightLine className="ml-2" />
                  </a>
                  <button
                    onClick={handleEnquiryClick}
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
                  >
                    Get Custom Quote
                  </button>
                </div>
              </div>
              
              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile form toggle */}
      <div className="lg:hidden fixed bottom-4 left-0 right-0 px-4 z-40">
        <button
          onClick={() => setIsFormOpen(!isFormOpen)}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-4 rounded-full shadow-lg flex items-center justify-center gap-2"
        >
          {isFormOpen ? "Close Form" : "Get Free Quote"}
          {isFormOpen ? (
            <RiCloseLine />
          ) : (
            <RiArrowDownLine className="animate-bounce" />
          )}
        </button>
      </div>

      {/* Mobile slide-up form */}
      {isFormOpen && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-xl shadow-xl max-h-[80vh] overflow-auto animate-slide-up">
          <div className="sticky top-0 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-center py-4 px-6 flex justify-between items-center">
            <h2 className="text-xl font-bold">GET YOUR QUOTE</h2>
            <button onClick={() => setIsFormOpen(false)}>
              <RiCloseLine size={24} />
            </button>
          </div>

          <div className="p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name*"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="emailAddress"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Mobile Number*"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold py-3 px-4 rounded-xl transition-colors"
              >
                Send Enquiry
              </button>

              <p className="text-xs text-center text-gray-500">
                By clicking submit query I accept the{" "}
                <a href="/privacy-policy" className="text-teal-600">
                  privacy policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default SaurashtraDarshanTour;