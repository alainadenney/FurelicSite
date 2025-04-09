import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/mainPage";
import TermsPage from "./pages/termsOfService";
import PrivacyPage from "./pages/privacyPolicy";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/*scrolls to top of page when the route changes*/}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/terms-of-service" element={<TermsPage />}/>
        <Route path="/privacy-policy" element={<PrivacyPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
