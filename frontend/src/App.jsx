import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Layout/Home";
import About from "./pages/About";
import JobSearch from "./pages/JobSearch";
import JobSeeker from "./pages/JobSeeker";
import Recruiter from "./pages/Recruiter";
import "./style.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/job/search" element={<JobSearch />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/jobseeker" element={<JobSeeker />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
