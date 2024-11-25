import AboutUs from "./AboutUs/AboutUs";
import "./App.css";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "./Footer/Footer";
import Homepage from "./Homepage/Homepage";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import SubHeading from "./SubHeading/SubHeading";
import Machinery from "./Machinery/Machinery";
function App() {
  return (
    <>
      <Logo />
      <Navbar />
      {/* <ContactUs/> */}
      <Machinery/>
      {/* <SubHeading subheading={"About Us"} /> */}
      {/* <Homepage /> */}
      {/* <AboutUs /> */}
      <Footer />
    </>
  );
}

export default App;
