import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Work from "../Components/WORK/Work";
import ServicePage from "../Components/Service/ServicePage";

function Routing() {
  const [hstart, setHstart] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<Home hstart = {hstart} setHstart = {setHstart} />}></Route>
      <Route path="/work" element={<Work hstart = {hstart} setHstart = {setHstart} />}></Route>
      <Route path="/service" element={<ServicePage hstart = {hstart} setHstart = {setHstart} />}></Route>
    </Routes>
  );
}

export default Routing;
