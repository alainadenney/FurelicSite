import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/mainPage";
import TermsPage from "./pages/termsOfService";
import PrivacyPage from "./pages/privacyPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="terms-of-service" element={<TermsPage />}/>
        <Route path="privacy-policy" element={<PrivacyPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
