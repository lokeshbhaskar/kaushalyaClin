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

function App() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Routes>
        <Route path="/" element={   <Home /> } />
        <Route path="/services/consultation" element={<Consultation />} />
        {/* <Route path="/services/appendix-removal" element={<AppendixRemoval />} />
        <Route path="/services/hernia-repair" element={<HerniaRepair />} />
        <Route path="/services/gallbladder-surgery" element={<GallbladderSurgery />} />
        <Route path="/services/piles-treatment" element={<PilesTreatment />} />
        <Route path="/services/wound-care" element={<WoundCare />} />  */}
        <Route path="/service/book-now" element={ <BookNow /> } />
         <Route path="/service/:slug" element={<ServiceDetails />} />
      </Routes>
    </div>
  );
}
  
export default App;
