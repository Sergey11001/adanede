import React from 'react';
import {motion} from "framer-motion";

import './styles.scss'

const Plan = () => {
    return (
        <motion.div
            initial={{opacity: 0, filter: 'blur(80px)'}}
            animate={{opacity: 1, filter: 'blur(0)'}}
            transition={{duration: 0.5}}
            exit={{opacity: 0, filter: 'blur(80px)'}}
            exittransition={{duration: 0.5}}
            className="plan__body"
        >
            <div className="stage__body">
                <div className="stage_title">
                    Stage 1. Inception
                </div>
                <div className="stage__content">
                    At this stage, we will create the most iconic and traditional projects and products. They will be
                    simple, but premium. From here you will recognize our identity. Through the results of our work we
                    convey our ideas, approaches and attitude to the intended visual and semantic content, show the
                    values and foundation on which the brand will be built, and bring people together, gathering the
                    efforts of all like-minded people for the process of creation
                </div>
            </div>
            <div className="stage__body">
                <div className="stage_title">
                    Stage 2. Path
                </div>
                <div className="stage__content">
                    The longest and the most challenging period, determining the direction to strengthen our visual
                    brand. Our focus is on assembling the right team - individuals who are worthy and committed to the
                    cause. We do not seek thousands of onlookers but hundreds of fighters who share our vision
                </div>
            </div>
            <div className="stage__body">
                <div className="stage_title">
                    Stage 3. Riddle
                </div>
                <div className="stage__content">
                    We will focus on revealing the most unexpected sides of our company. We built the entire ecosystem
                    interconnected and filled with secret ciphers, creating a single puzzle whose solution goes beyond
                    traditional boundaries of our computers, homes, countries, and even the NFT space. By exploring
                    these unexpected aspects, we hope to attract a diverse and curious audience who share our passion
                    for exploration and creativity
                </div>
            </div>
            <div className="stage__body">
                <div className="stage_title">
                    Stage 4. Diversity
                </div>
                <div className="stage__content">
                    All the while, somewhere very deep in the darkness outside from all eyes and attention, a multitude
                    of ambitious ideas are growing and becoming more and more real. They will slowly grow to become
                    branches on a tree, and when the tree itself is ready, all the branches will blossom. The goal is to
                    create and develop from nothing something that can live on its own. These will be self-realized
                    experimental products that do not require the basic resources of the entire ecosystem, but only
                    supplement it. The association will be the basis for the realization of these products
                </div>
            </div>

        </motion.div>
    );
};

export default Plan;