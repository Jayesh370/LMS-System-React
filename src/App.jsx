import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import Footer from "./components/footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop.jsx";



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,   // <- try lowering offset if you don’t see it
    });
  }, []);
  return (
    <>
      <ScrollToTop />
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;