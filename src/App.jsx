import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Consultation from "./pages/services/Consultation";
import BookNow from "./pages/BookNow";
import ServiceDetails from "./pages/ServiceDetailPage";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { AnimatePresence , motion} from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <ToastContainer position="bottom-center" autoClose={3000} />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/services/consultation" element={<Consultation />} />
            {/* <Route path="/doctor-details" element={<DoctorDetails />} /> */}
            <Route path="/book-now" element={<BookNow />} />
            <Route path="/service/:slug" element={<ServiceDetails />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
