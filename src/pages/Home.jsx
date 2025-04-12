import BookingSteps from "../layouts/BookingSteps";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import OurToursPackage from "../layouts/OurTousPackage";
import TopHeader from "../layouts/TopHeader";
import WhyChooseUs from "../layouts/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <Hero />
      <WhyChooseUs />
      <OurToursPackage />
      <BookingSteps />
      <Footer />
    </div>
  );
};

export default Home;
