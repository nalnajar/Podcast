import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './Components/LoginSignupComponent/LoginSignup';
import DeveloperPage from './Components/DevelopersPageComponent/developerspage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/DeveloperPage" element={<DeveloperPage />} />
          <Route path="/" element={<LoginSignup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
