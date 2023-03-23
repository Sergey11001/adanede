import React from 'react';
import {useLocation} from "react-router-dom";
import Plan from "../Plan";
import Vision from "../Vision";

const Investors = () => {
    const location = useLocation()

    if(location.pathname.includes('plan')){
        return <Plan />
    }
    if(location.pathname.includes('vision')){
        return <Vision />
    }
};

export default Investors;