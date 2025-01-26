// src/App.tsx
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UbicationPage from "./pages/UbicationPage";
import AboutTheChef from "./pages/AboutTheChef";
import ReservePage from "./pages/ReservePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/Ubication"
        element={<UbicationPage title="Where is the restaurant?" />}
      />
      <Route
        path="/AboutTheChef"
        element={<AboutTheChef title="Who is the chef?" subtitle="Highlights" />}
      />
      <Route
        path="/Reserve"
        element={<ReservePage title1="Reservation" title2="Most Requested Dishes" />}
      />
    </Routes>
  );
}

export default App;