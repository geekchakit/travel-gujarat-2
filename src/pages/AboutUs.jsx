// import Footer from "../layouts/Footer";
// import Header from "../layouts/Header";
// import TopHeader from "../layouts/TopHeader";

// const AboutUs = () => {
//     return (
//         <div>
//             <TopHeader />
//             <Header />
//             <main className="max-w-4xl mx-auto px-4 py-12">
//                 <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
//                     Discover Gujarat: Unforgettable Journeys Await
//                 </h1>
//                 <p className="text-lg text-gray-700 mb-4">
//                     Gujarat Tour Package is a leading Tour Operator based in Ahmedabad, Gujarat, providing a range of vacation packages both domestically and internationally. Our goal is to ensure that travel is enjoyable, cost-effective, and stress-free for all of our clients.
//                 </p>
//                 <p className="text-lg text-gray-700 mb-4">
//                     We recognize that travel goes beyond merely exploring new locations; it’s about forging unforgettable memories that stay with you forever. Founded out of a love for adventure and a pledge to outstanding service, we aim to create journeys that surpass your expectations.
//                 </p>
//                 <p className="text-lg text-gray-700 mb-4">
//                     Our adventure started with a straightforward conviction: that travel should not simply be a break from routine—it should be a transformative experience that enhances your life. Whether you’re in search of the excitement of an exotic locale, the serenity of a remote beach, or the cultural depth of a historical city, we are committed to designing tailored travel experiences that reflect your specific preferences.
//                 </p>
//                 <p className="text-lg text-gray-700 mb-4">
//                     What distinguishes us is our constant commitment to excellence and ensuring customer satisfaction. We carefully choose accommodations, activities, and destinations that align with our exceptional standards. Whether you prefer luxurious resorts or charming boutique hotels, every facet of your journey is crafted to guarantee comfort and enjoyment.
//                 </p>
//                 <p className="text-lg text-gray-700 mb-4">
//                     Customer care is our top priority. Our team of seasoned travel professionals is dedicated to offering personalized support at every stage—from designing your itinerary to ensuring a smooth travel experience. Your satisfaction is our highest aim, and we strive to surpass your expectations.
//                 </p>
//                 <p className="text-lg text-gray-700">
//                     Allow us to bring your travel aspirations to life and create unforgettable memories. Explore the world with us and enjoy travel like never before.
//                 </p>
//             </main>
//             <Footer />
//         </div>
//     );
// };

// export default AboutUs;

import React from "react";
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
} from "react-icons/ri";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import TopHeader from "../layouts/TopHeader";

const AboutUs = () => {
  const stats = [
    { number: "2022", label: "Founded", icon: RiStarFill },
    { number: "500+", label: "Happy Travelers", icon: RiUserSmileFill },
    { number: "50+", label: "Destinations", icon: RiMapPin2Fill },
    { number: "100%", label: "Satisfaction", icon: RiHeartFill },
  ];

  const values = [
    {
      icon: RiShieldCheckFill,
      title: "Trust & Reliability",
      description: "Your journey is in safe hands with our experienced team and proven track record.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: RiAwardFill,
      title: "Excellence",
      description: "We maintain the highest standards in service quality and customer satisfaction.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      icon: RiGlobalFill,
      title: "Cultural Immersion",
      description: "Experience authentic Gujarat through carefully curated cultural encounters.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: RiHeartFill,
      title: "Personalized Care",
      description: "Every itinerary is crafted with personal attention to your preferences and needs.",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <RiStarFill className="text-yellow-400 mr-2" />
              <span className="text-sm font-medium">Since 2022</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Discover Gujarat: 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                {" "}Unforgettable Journeys
              </span>
              {" "}Await
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in exploring Gujarat's spiritual heritage, cultural treasures, and breathtaking landscapes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://travel-gujarat-2.vercel.app/"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Explore Our Tours
                <RiArrowRightLine className="ml-2" />
              </a>
              <a
                href="https://wa.me/+919998768210"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-xl"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-2xl mb-4 group-hover:bg-indigo-700 transition-colors duration-300">
                  <stat.icon className="text-2xl" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full mb-6">
                  <RiHeartFill className="mr-2" />
                  <span className="font-medium">Our Story</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Born from Passion, Driven by Excellence
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p>
                    Gujarat Tour Package emerged from a simple yet powerful belief: that travel should be transformative, not just recreational. As a leading tour operator based in Ahmedabad, we've dedicated ourselves to crafting journeys that create lasting memories and meaningful connections.
                  </p>
                  <p>
                    Since our founding in 2022, we've built our reputation on understanding that every traveler is unique. Whether you seek the spiritual enlightenment of ancient temples, the architectural marvel of the Statue of Unity, or the cultural richness of Gujarat's heritage, we design experiences that resonate with your soul.
                  </p>
                  <p>
                    Our commitment goes beyond just organizing trips—we curate transformative experiences that enrich your perspective and create stories you'll cherish forever.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/hero-banner-bg.webp"
                    alt="Gujarat Heritage"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center">
                        <RiCheckboxCircleFill className="text-green-600 text-xl mr-3" />
                        <span className="text-gray-800 font-semibold">Trusted by 500+ Happy Travelers</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400/30 rounded-full blur-lg"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-400/30 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full mb-6">
                <RiAwardFill className="mr-2" />
                <span className="font-medium">Our Values</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                What Sets Us Apart
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our core values guide every decision we make and every experience we create for our valued travelers.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${value.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className={`text-2xl ${value.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Our Mission & Vision
                  </h2>
                  <p className="text-xl text-indigo-100 leading-relaxed">
                    To make travel accessible, enjoyable, and transformative for everyone while showcasing the incredible beauty and rich heritage of Gujarat.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Customer-Centric Approach</h3>
                    <p className="text-indigo-100">
                      Every aspect of your journey is carefully planned with your comfort, safety, and satisfaction as our top priorities.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Authentic Experiences</h3>
                    <p className="text-indigo-100">
                      We believe in showcasing the real Gujarat—its people, traditions, flavors, and stories that make it truly special.
                    </p>
                  </div>
                </div>
                
                <div className="text-center mt-12">
                  <a
                    href="https://travel-gujarat-2.vercel.app/"
                    className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Start Your Journey
                    <RiArrowRightLine className="ml-2" />
                  </a>
                </div>
              </div>
              
              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;