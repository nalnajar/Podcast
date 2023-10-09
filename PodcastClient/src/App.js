import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginSignup from "./Components/LoginSignupComponent/LoginSignup";
import Home from "./Components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Signup" element={<LoginSignup />} />
        <Route path="/Log-in" element={<LoginSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
