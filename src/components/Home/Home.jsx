import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import NavbarBanner from "../Navbar/NavbarBanner";
import NumberCounter from "../NumberCounter/NumberCounter";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Banner from "../Banner/Banner";
import SubjectCard from "../SubjectCard/SubjectCard";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../Footer/Footer";
import { BannerData } from "../Banner/Bannerdata";
import { BannerData2 } from "../Banner/Bannerdata";
//import './App.css'


  const Home=()=>{

  return (
    <>
    <main className="overflow-x-hidden">
      <Navbar  />
      <NavbarBanner />
      <Hero/>
      <NumberCounter/>
      <WhyChooseUs/>
      <Banner   {...BannerData} />
      <Banner {...BannerData2} reverse={true} />
      <SubjectCard/>
      <Testimonial/>
      <Footer/>
      </main>
      </>
)}
export default Home