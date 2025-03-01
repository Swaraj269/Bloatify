import React from "react";
import Navbar from "../Navbar";
import Worklanding from "./Worklanding";
import WorkSliderPage from "./WorkSliderPage";
import Footer from "../Footer";

function Work({ hstart, setHstart }) {
  return (
    <>
      <Navbar hstart={hstart} />
      <Worklanding />
      <WorkSliderPage hstart={hstart} setHstart={setHstart} />
      <Footer hstart={hstart} setHstart={setHstart} />
    </>
  );
}

export default Work;
