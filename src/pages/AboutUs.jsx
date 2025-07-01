import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import TopHeader from "../layouts/TopHeader";

const AboutUs = () => {
    return (
        <div>
            <TopHeader />
            <Header />
            <main className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
                    Discover Gujarat: Unforgettable Journeys Await
                </h1>
                <p className="text-lg text-gray-700 mb-4">
                    Gujarat Tour Package is a leading Tour Operator based in Ahmedabad, Gujarat, providing a range of vacation packages both domestically and internationally. Our goal is to ensure that travel is enjoyable, cost-effective, and stress-free for all of our clients.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    We recognize that travel goes beyond merely exploring new locations; it’s about forging unforgettable memories that stay with you forever. Founded out of a love for adventure and a pledge to outstanding service, we aim to create journeys that surpass your expectations.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    Our adventure started with a straightforward conviction: that travel should not simply be a break from routine—it should be a transformative experience that enhances your life. Whether you’re in search of the excitement of an exotic locale, the serenity of a remote beach, or the cultural depth of a historical city, we are committed to designing tailored travel experiences that reflect your specific preferences.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    What distinguishes us is our constant commitment to excellence and ensuring customer satisfaction. We carefully choose accommodations, activities, and destinations that align with our exceptional standards. Whether you prefer luxurious resorts or charming boutique hotels, every facet of your journey is crafted to guarantee comfort and enjoyment.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    Customer care is our top priority. Our team of seasoned travel professionals is dedicated to offering personalized support at every stage—from designing your itinerary to ensuring a smooth travel experience. Your satisfaction is our highest aim, and we strive to surpass your expectations.
                </p>
                <p className="text-lg text-gray-700">
                    Allow us to bring your travel aspirations to life and create unforgettable memories. Explore the world with us and enjoy travel like never before.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;