import React from 'react';
import {motion} from "framer-motion";

import './styles.scss'

const Vision = () => {

    return (
        <motion.div
            initial={{opacity: 0, filter: 'blur(80px)'}}
            animate={{opacity: 1, filter: 'blur(0)'}}
            transition={{duration: 0.5}}
            exit={{opacity: 0, filter: 'blur(80px)'}}
            exittransition={{duration: 0.5}}
            className="vision__body"
        >
            <div className="vision__block">
                <div className="vision__title">
                    Why
                </div>
                <div className="vision__text">
                    Everything we do, we believe in one thing that any project in the industry must understand - we all
                    provide the experience. And the fundamentals of it for us is an Amazement. That’s an emotion laying
                    in the very basis of every related to Adanede person. It is what we desperately seek. It is what we
                    cannot satisfy but the need is bottomless and permanent
                    <br/>
                    <br/>
                    What is amazement? It is not a surprise from fortune cookie. No, it goes far beyond simple feelings:
                    it is innovations, new records, overcame expectations, miracles, mysteries - all those things, that
                    make a life of humankind vivid, that makes you feel alive once again, are all based on amazement. In
                    Adanede every new endeavor or creation is unexpected, fueled by the desire to inspire amazement in
                    those who experience it.
                </div>
            </div>
            <div className="vision__block">
                <div className="vision__title">
                    How
                </div>
                <div className="vision__text">
                    Adanede is about a unique attitude. We hold the highest demands to ourselves every step of the way. Every time a new project or even a single image is created - everything is thought through and controlled literally down to every pixel. If we did something - we mean it
                    <br/>
                    Adanede is independent - that is why there is not and won’t be any outside investment funding. NFT is the perfect instrument to remain free and make an impact. There won’t be any corporate entities taking a large share - all stands in Adanede
                    <br/>
                    With growth we will explore new fields, gather new believers from every spaces. We want our activity to be a challenge, we want to live to overcome
                    <br/>
                    We want to create something that can become a meaningful part of your life - whether it's a personal value or a desired possession for others
                </div>
            </div>
        </motion.div>
    );
};

export default Vision;