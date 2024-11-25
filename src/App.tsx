import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UbicationPage from "./pages/UbicationPage";
import AboutTheChef from "./pages/AboutTheChef";
import ReservePage from "./pages/reservePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/Ubication"
            element={<UbicationPage title="Where is the restaurant?" />}
          />
          <Route
            path="/AboutTheChef"
            element={
              <AboutTheChef title="Who is the chef?" subtitle="Highlights" />
            }
          />
          <Route
            path="/Reserve"
            element={<ReservePage title1="Reservation" title2="Most Request Dishes" />}
          />
        </Routes>
      </Router>
    </>
  );
}
export default App;
