import {
   Route,
   Routes,
  useLocation,
} from "react-router-dom";
 import Home from "./pages/Home";
import BuildingView from "./pages/BuildingView";
 import { AnimatePresence } from "framer-motion";
import Energy from "./pages/Energy";
import BuildingFloorView from "./pages/BuildingFloorView";

 

export default function App() {

  const location = useLocation();


  return (
    <>
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/building" element={<BuildingView />} />
        <Route path="/building/floor" element={<BuildingFloorView />} />

        <Route path="/energy" element={<Energy />} />

      </Routes>
    </AnimatePresence>
    </>


  )
  
 
} 