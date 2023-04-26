import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import {routes} from "../../utils/routes";
import {AnimatePresence} from "framer-motion";

const AppRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                {
                    routes.map(route => (
                        <Route key={route.path} path={"/adanede" + route.path} element={route.element} />
                    ))
                }
            </Routes>
        </AnimatePresence>

    );
};

export default AppRoutes;