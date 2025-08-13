import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Consultation from "./pages/services/Consultation";
import AppendixRemoval from "./pages/services/AppendixRemoval";
import HerniaRepair from "./pages/services/HerniaRepair";
import GallbladderSurgery from "./pages/services/GallbladderSurgery";
import PilesTreatment from "./pages/services/PilesTreatment";
import WoundCare from "./pages/services/WoundCare";
import BookNow from "./pages/BookNow";
import ServiceDetails from "./pages/ServiceDetailPage";
import DoctorDetails from "./components/DoctorDetails";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <ToastContainer position="bottom-center" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/consultation" element={<Consultation />} />
        {/* <Route path="/doctor-details" element={<DoctorDetails />} /> */}
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/service/:slug" element={<ServiceDetails />} />
      </Routes>
    </div>
  );
}

export default App;
