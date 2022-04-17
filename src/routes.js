import React from "react";
import { Route, Routes } from "react-router-dom";
import CreatePhase from "./pages/create/create";
import Home from "./pages/home/home";

const SleepTrackerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreatePhase />} />
    </Routes>
  );
};

export default SleepTrackerRoutes;
