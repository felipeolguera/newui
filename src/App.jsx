import {
   Route,
   Routes,
  useLocation,
} from "react-router-dom";
 import Home from "./pages/Home";
import BuildingView from "./pages/BuildingView";
 import { AnimatePresence } from "framer-motion";

 

export default function App() {

  const location = useLocation();


  return (
    <>
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/building" element={<BuildingView />} />
      </Routes>
    </AnimatePresence>
    </>


  )
  
 
} 