import AboutUs from "./AboutUs/AboutUs";
import "./App.css";
import Footer from "./Footer/Footer";
import Homepage from "./Homepage/Homepage";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import SubHeading from "./SubHeading/SubHeading";

function App() {
  return (
    <>
      <Logo />
      <Navbar />
      <SubHeading subheading={"About Us"} />
      {/* <Homepage /> */}
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
