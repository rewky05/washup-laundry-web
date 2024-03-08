import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Locations from "./components/Locations";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Locations />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
