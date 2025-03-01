import React from "react";
import Navbar from "../Navbar";
import Servicelanding from "./Servicelanding";
import ServiceSliderPage from "./ServiceSliderPage";
import Footer from "../Footer";

function ServicePage({ hstart, setHstart }) {
  return (
    <>
      <Navbar hstart={hstart} />
      <Servicelanding hstart={hstart} />
      <ServiceSliderPage hstart={hstart} setHstart={setHstart} />
      <Footer hstart={hstart} setHstart={setHstart} />
    </>
  );
}

export default ServicePage;
