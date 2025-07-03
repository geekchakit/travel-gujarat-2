import React from "react";
import { RiMapPinLine, RiMailSendLine, RiPhoneLine } from "react-icons/ri";

const BookingSteps = () => {
  const steps = [
    {
      id: 1,
      icon: <RiMapPinLine className="text-white text-2xl" />,
      title: "Choose Your Package",
      description:
        "Select from our curated Gujarat tours, like Dwarka Somnath or Statue of Unity, for a spiritual and cultural experience.",
    },
    {
      id: 2,
      icon: <RiMailSendLine className="text-white text-2xl" />,
      title: "Send Enquiry",
      description:
        "Fill out the enquiry form with your details or contact us directly to customize your Gujarat tour package.",
    },
    {
      id: 3,
      icon: <RiPhoneLine className="text-white text-2xl" />,
      title: "Get A Call Back",
      description:
        "Our travel experts will reach out promptly to finalize your booking and answer any questions.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Customize & Book Amazing
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-8">
          Gujarat Gujarat Tours
        </h3>
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="text-center relative">
            {/* Step Number with Line Connector */}
            <div className="relative">
              <div className="flex justify-center mb-6">
                <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>

              {/* Connecting Line */}
              {step.id < 3 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-orange-300 z-0"></div>
              )}
            </div>

            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      {/* WhatsApp Icon with Blink Animation */}
      <a
        href="https://wa.me/+919998768210"
        className="fixed bottom-20 left-6 bg-green-500 rounded-full w-14 h-14 flex items-center justify-center shadow-lg cursor-pointer hover:bg-green-600 animate-blink transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
      {/* Call Button with Blink Animation */}
      <a
        href="tel:+919998768210"
        className="fixed bottom-20 right-6 bg-blue-500 rounded-full w-14 h-14 flex items-center justify-center shadow-lg cursor-pointer hover:bg-blue-600 animate-blink transition duration-300"
        title="Call Us"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.72 11.72 0 003.66.58 1 1 0 011 1v3.75a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.75a1 1 0 011 1 11.72 11.72 0 00.58 3.66 1 1 0 01-.21 1.11l-2.5 2.52z" />
        </svg>
      </a>

    </div>
  );
};

export default BookingSteps;
