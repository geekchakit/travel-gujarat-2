import { useState, useEffect } from "react";
import {
  RiPhoneFill,
  RiArrowDownLine,
  RiCalendarLine,
  RiUserLine,
  RiCloseLine,
} from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { useForm } from "../context/FormContext";
import emailjs from "emailjs-com";
import swal from "sweetalert";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isFormOpen, setIsFormOpen } = useForm();
  const { openForm } = useForm();

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: e.target.fullName.value,
      contact_no: e.target.contactNumber.value,
      email_id: e.target.emailAddress.value,
      // number_of_travelers: e.target.numberOfTravelers.value,
      // date_of_travel: e.target.dateOfTravel.value,
      // message: e.target.message.value,
      website: "Gujarattrip",
    };

    // alert("Your Response Has been submitted!");

    emailjs
      .send(
        "service_v2o5j0l", // Replace with your EmailJS service ID
        "template_apvv4kv", // Replace with your EmailJS template ID
        templateParams,
        "3w5lxrQSjLVVLUx6_" // Replace with your EmailJS public key
      )
      .then(
        () => {
          swal("Good job!", "Your Response Has been submitted!", "success");
        },
        () => {
          swal("Sorry!", "Something went wrong. Please try again.", "error");
        }
      );
  };

  return (
    <div
      id="hero-section"
      style={{
        backgroundImage: "url('/gujaratbg.webp')",
      }}
      className="relative w-full min-h-screen bg-cover bg-center font-primary"
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10 h-full min-h-screen flex flex-col lg:flex-row items-center justify-between py-16">
        {/* Left side - Text content */}
        <div className="w-full lg:w-1/2 text-white mb-8 lg:mb-0">
          <div className="flex items-center gap-2 mb-4">
            <MdLocationOn className="text-orange-500 text-xl" />
            <span className="text-white/90 font-medium text-sm tracking-wider">
              EXPLORE GUJARAT
            </span>
          </div>

          <h2 className="font-bold text-5xl sm:text-7xl lg:text-6xl mb-2">
            DWARKA SOMNATH
          </h2>

          <div className="flex items-center flex-wrap gap-4 mb-6">
            <span className="text-xl sm:text-2xl">Tour Packages</span>
            <span className="inline-block px-4 py-1 bg-teal-600 text-white rounded-full text-sm">
              3N/4D
            </span>
          </div>

          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-3 mb-8">
            {/* <span className="text-lg mr-2">Starting from</span> */}
            <span className="text-2xl sm:text-3xl font-bold text-orange-400">
              ₹5,575/-
            </span>
            <span className="text-white/80 ml-1">PP</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleEnquiryClick}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all shadow-lg"
            >
              <RiPhoneFill />
              <span>Book Now</span>
            </button>

            {/* <a
              href="https://gujrattourpackage.com/"
              className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all"
            >
              View Packages
            </a> */}
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-5/12">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md mx-auto">
            <div className="bg-teal-600 text-white text-center py-4 px-6">
              <h2 className="text-xl font-bold">SUBMIT QUERY FORM</h2>
            </div>

            <div className="p-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Name*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="emailAddress"
                    placeholder="Email Id"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="contactNumber"
                    placeholder="Mobile No.*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded-md transition-colors"
                >
                  Send Enquiry
                </button>

                <p className="text-xs text-center text-gray-500">
                  By clicking submit query I accept the{" "}
                  <a href="/privacy-policy" className="text-blue-500">
                    privacy policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile form toggle */}
      <div className="lg:hidden fixed bottom-4 left-0 right-0 px-4 z-40">
        <button
          onClick={() => setIsFormOpen(!isFormOpen)}
          className="w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-full shadow-lg flex items-center justify-center gap-2"
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
          <div className="sticky top-0 bg-teal-600 text-white text-center py-4 px-6 flex justify-between items-center">
            <h2 className="text-xl font-bold">SUBMIT QUERY FORM</h2>
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
                  placeholder="Name*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="emailAddress"
                  placeholder="Email Id"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Mobile No.*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded-md transition-colors"
              >
                Send Enquiry
              </button>

              <p className="text-xs text-center text-gray-500">
                By clicking submit query I accept the{" "}
                <a href="/privacy-policy" className="text-blue-500">
                  privacy policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
