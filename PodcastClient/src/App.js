import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginSignup from "./Components/LoginSignupComponent/LoginSignup";
import Home from "./Components/Home/Home";
import AboutPage from "./Components/About/AboutPage";
import DevPage from "./Components/DevPage/CodersComponent";
import { Footer } from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContactUs";
import HelpPage from "./Components/HelpPage/HelpPage";
import UserPage from "./Components/ProfilePage/ProfileViewer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact-us" element={<ContactUs />} />
          <Route path="/Signup" element={<LoginSignup />} />
          <Route path="/Log-in" element={<LoginSignup />} />
          <Route path="/DevPage" element={<DevPage />}/>
          <Route path="/UserPage" element={<UserPage />}/>
          <Route path="/HelpPage" element={<HelpPage />}/>

        </Routes>
        <div class="footerContainer">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
