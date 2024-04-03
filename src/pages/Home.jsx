import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Feature from "../components/Feature";
import Usecases from "../components/Usecases";
import Distrubution from "../components/Distrubution";
import Road from "../components/Road";
import Team from "../components/Team";
import FAQSection from "../components/FAQSection";
import Join from "../components/Join";
import Email from "../components/Email";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="Montserrat">
      <Header />
      <Hero />
      <About />
      <Feature />
      <Usecases />
      <Distrubution />
      <Road />
      <Team />
      <FAQSection />
      <Join />
      <Email />
      <Footer />
    </div>
  );
};

export default Home;
