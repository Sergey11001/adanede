import React, {useEffect} from 'react';
import {motion, useAnimation} from "framer-motion";
import {useSelector} from "react-redux";

const textBlockVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 2
        }
    },
}

const RightText = () => {
    const project = useSelector(state => state.theme.project)
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            key={project}
            transition={{duration: 1}}
            className="text__wrapper"
        >
            <div className={!project ? 'text text__reverse' : "text text-white"}>
                <div className={!project ? "text__name" : "text__name text__name-project"}>
                    {project === 'neura' ? "Neura" : project === 'supreme' ? 'SupremePunks' : project === 'sakrai' ? 'Sakrai' : '' || 'ADANEDE'}
                </div>
                <div className="text__sign">
                    {project === 'neura' ? "/ˈnʊr.ɑː/" : project === 'supreme' ? '/suːˈpriːm pʌŋks/' : project === 'sakrai' ? '/sɑkrʌiː/' : '' || '/eɪdəned/'}
                </div>
                <div className="text__sub">
                    Noun
                </div>
                <div className={!project ? "text__content" : 'text__content  text__content-project'}>
                    The word is formed by combining terms "ada" and "eden”. It reflects the idea of exploring and using
                    the resources that are around us at the moment and creating something new out of them, as well as
                    the idea of technology and the pursuit of the ideal place that humanity has dreamed of.
                </div>
                {
                    project ?
                        <a href="#" className="text__mail">
                            {project === 'neura' ? "neura.adanede.com" : project === 'supreme' ? 'supreme.adanede.com' : project === 'sakrai' ? 'sakrai.adanede.com' : ''}
                        </a>
                        :
                        null
                }
            </div>
        </motion.div>
    );
};

export default RightText;