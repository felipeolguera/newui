import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
 import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const RootContainer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleCalloutClick = () => {
        // Navigate to the desired route
         navigate(location.pathname)
      };

     return (
        <>
    <AnimatePresence mode='wait'    >
                 {/* <motion.div
                    key={location.pathname}
                    exit={{ opacity: 0 }}
                    transition={{duration: 5 }}
                 >  */}
                 <Outlet />
     
                {/* </motion.div>   */}
 
      </AnimatePresence>
         </>
      );
    };

export default RootContainer