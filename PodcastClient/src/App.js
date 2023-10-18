import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginSignup from "./Components/LoginSignupComponent/LoginSignup";
import Home from "./Components/Home/Home";
import AboutPage from "./Components/About/AboutPage";
import DevPage from "./Components/DevPage/CodersComponent";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Signup" element={<LoginSignup />} />
          <Route path="/Log-in" element={<LoginSignup />} />
          <Route path="/DevPage" element={<DevPage />}></Route>
        </Routes>
        <div class="footerContainer">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
