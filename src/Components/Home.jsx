import React, { useState } from "react";
import Loader from "./Loader";
import Landing from "./Landing";
import Service from "./Service";
import Navbar from "./Navbar";
import VideoSlider from "./VideoSlider";
import Footer from "./Footer";
function Home({ hstart, setHstart }) {
  const [loaderHandler, setLoaderHandler] = useState(0);

  return (
    <div>
      <Loader setFinish={setLoaderHandler} />
      <Navbar hstart={hstart} />
      <Landing finish={loaderHandler} />
      <VideoSlider setHstart={setHstart} hstart={hstart} />
      <Service />
      <Footer setHstart={setHstart} hstart={hstart} />
    </div>
  );
}

export default Home;
