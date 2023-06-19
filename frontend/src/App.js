import React, { useState, useEffect } from "react";
import TopNavigation from "./components/TopNavigationBar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import ScrollToTop from "./components/ScrollToTop";
import Exam from "./pages/exam";
import Dashboard from "./pages/dashboard";
import Preloader from "../src/components/Pre";
import Construction from "./pages/construction"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <TopNavigation />
          <ScrollToTop />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/exam" exact element={<Exam />} />
            <Route path="/about" exact element={<AboutUs />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/construction" exact element={<Construction />} />
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
