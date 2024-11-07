import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import UbicationPage from "./pages/UbicationPage";



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Ubication" element={<UbicationPage title="Where is the restaurant?" />} />
      </Routes>
    </Router>
    </>
  );
}
export default App;