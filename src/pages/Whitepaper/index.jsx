import React from 'react';
import {motion} from "framer-motion";
import './styles.scss'
import Soon from "../../components/Soon";

const Whitepaper = () => {
    return (
        <motion.div
            initial={{opacity:0, filter:'blur(80px)'}}
            animate = {{opacity:1,  filter:'blur(0)'}}
            transition={{duration: 0.5}}
            exit={{opacity:0, filter:'blur(80px)'}}
            exitTransition = {{duration: 0.5}}
            className="whitepaper__body"
        >
            <Soon />
        </motion.div>
    );
};

export default Whitepaper;