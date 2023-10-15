import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./Components/LoginSignupComponent/LoginSignup";
import PersonalProfilePage from "./Components/PersonalProfilePageComponent/PersonalProfilePage";
import PersonalPostsPage from "./Components/PersonalProfilePageComponent/PersonalPostsPage";
import PersonalAboutPage from "./Components/PersonalProfilePageComponent/PersonalAboutsPage";
import PersonalPhotosPage from "./Components/PersonalProfilePageComponent/PersonalPhotosPage";
import PersonalVideosPage from "./Components/PersonalProfilePageComponent/PersonalVideosPage";

function App() {
  return (
    // <div>
    //   <LoginSignup />
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/profilepage" element={<PersonalProfilePage />} />
        <Route path="/personalposts"  element={<PersonalPostsPage />}/>
        <Route path="/personalphotos"  element={<PersonalPhotosPage />}/>
        <Route path="/personalabout"  element={<PersonalAboutPage />}/>
        <Route path="/personalvideos"  element={<PersonalVideosPage />}/>

      </Routes>
    </Router>
  );
}

export default App; //App
