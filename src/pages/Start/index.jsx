import React from 'react';
import {motion} from "framer-motion";

import './styles.scss'
import "../../utils/animation/styles/glitcher.scss"


const Start = () => {
    return (
        <motion.div
            initial={{opacity:0, filter:'blur(80px)'}}
            animate = {{opacity:1,  filter:'blur(0)'}}
            transition={{duration: 0.5}}
            exit={{opacity:0, filter:'blur(80px)'}}
            exittransition = {{duration: 0.5}}
            className="start__body"
        >
            <span title="/adanede//" className="glitcher">
                /adanede//
            </span>
        </motion.div>
    );
};

export default Start;