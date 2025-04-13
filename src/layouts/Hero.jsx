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

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: e.target.fullName.value,
      contact_no: e.target.contactNumber.value,
      email_id: e.target.emailAddress.value,
      number_of_travelers: e.target.numberOfTravelers.value,
      date_of_travel: e.target.dateOfTravel.value,
      message: e.target.message.value,
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
          {/* Content */}
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

                <div className="flex gap-4">
                  <div className="w-1/2">
                    <div className="relative">
                      <RiCalendarLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="dateOfTravel"
                        placeholder="Travel Date"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div className="w-1/2">
                    <div className="relative">
                      <RiUserLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <select
                        name="numberOfTravelers"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none bg-white"
                      >
                        <option>No. of Adults</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4+</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Requirement"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  ></textarea>
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

              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="relative">
                    <RiCalendarLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="dateOfTravel"
                      placeholder="Travel Date"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div className="w-1/2">
                  <div className="relative">
                    <RiUserLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select
                      name="numberOfTravelers"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none bg-white"
                    >
                      <option>No. of Adults</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4+</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Requirement"
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>
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
