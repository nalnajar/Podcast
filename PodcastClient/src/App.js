import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./Components/LoginSignupComponent/LoginSignup";
import PersonalProfilePage from "./Components/PersonalProfilePageComponent/PersonalProfilePage";
import PersonalPostsPage from "./Components/PersonalProfilePageComponent/PersonalPostsPage";
import PersonalAboutPage from "./Components/PersonalProfilePageComponent/PersonalAboutsPage";
import PersonalPhotosPage from "./Components/PersonalProfilePageComponent/PersonalPhotosPage";
import PersonalVideosPage from "./Components/PersonalProfilePageComponent/PersonalVideosPage";
import Home from "./Components/Home/Home";
import AboutPage from "./Components/About/AboutPage";

function App() {
  return (
    // <div>
    //   <LoginSignup />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Signup" element={<LoginSignup />} />
        <Route path="/Log-in" element={<LoginSignup />} />
        <Route path="/profilepage" element={<PersonalProfilePage />} />
        <Route path="/personalposts" element={<PersonalPostsPage />} />
        <Route path="/personalphotos" element={<PersonalPhotosPage />} />
        <Route path="/personalabout" element={<PersonalAboutPage />} />
        <Route path="/personalvideos" element={<PersonalVideosPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; //App
