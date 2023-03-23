import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {motion, useAnimation} from "framer-motion"

import PageWrapper from "./components/PageWrapper";
import * as Animation from "./utils/animation"

import letterA from "./assets/logoTitle/A.svg"
import letterE from "./assets/logoTitle/E.svg"
import letterN from "./assets/logoTitle/N.svg"
import letterV from "./assets/logoTitle/V.svg"

import "./App.scss"

function App() {
    const [startAnimationEnd, setStartAnimationEnd] = useState(false)
    const [animationEnd, setAnimationEnd] = useState(false)
    const animation = useAnimation();

    const {project, theme} = useSelector(state => state.theme)

    useEffect(() => {
        const scrollEventHandler = () => {
            setStartAnimationEnd(true)
            animation.start("animate")
            setTimeout(() => setAnimationEnd(true), 2800)
        }
        if (!startAnimationEnd) {
            document.body.addEventListener('wheel', scrollEventHandler)
            document.body.addEventListener('touchmove', scrollEventHandler)
        }
        return () => {
            document.body.removeEventListener("wheel", scrollEventHandler)
            document.body.removeEventListener("touchmove", scrollEventHandler)
        }
    }, [startAnimationEnd]);

    useEffect(() => {
        document.body.style.backgroundColor = project === 'neura' ?
            'black' : project === 'supreme' ?
                '#272829' : project === 'sakrai'
                    ? '#010F0E' : ""
                    || '#DEDED8'
    }, [project])

    return (
        <div className={"wrapper " + (project ? `wrapper-${project}` : '')}>
            <motion.div
                variants={Animation.containerLetters}
                animate={animation}
                className="start">
                <div className="letters">
                    <motion.img
                        variants={Animation.letter1Variants}
                        animate={animation}
                        className="letter"
                        src={letterA}
                        alt="A"
                    />
                    <motion.img
                        variants={Animation.letter2Variants}
                        animate={animation}
                        className="letter"
                        src={letterV}
                        alt="F"
                    />
                    <motion.img
                        variants={Animation.letter3Variants}
                        animate={animation}
                        className="letter"
                        src={letterA}
                        alt="A"
                    />
                    <motion.img
                        variants={Animation.letter4Variants}
                        animate={animation}
                        className="letter"
                        src={letterN}
                        alt="E"
                    />
                    <motion.img
                        variants={Animation.letter5Variants}
                        animate={animation}
                        className="letter letterE"
                        src={letterE}
                        alt="A"
                    />
                    <motion.img
                        variants={Animation.letter6Variants}
                        animate={animation}
                        className="letter"
                        src={letterV}
                        alt="E"
                    />
                    <motion.img
                        variants={Animation.letter7Variants}
                        animate={animation}
                        className="letter letterE"
                        src={letterE}
                        alt="F"
                    />
                </div>
                <motion.div
                    variants={Animation.textVariants}
                    animate={animation}
                    className="text"
                >
                    <div className="text__name">
                        ADANEDE
                    </div>
                    <div className="text__sign">
                        /eɪdəned/
                    </div>
                    <div className="text__sub">
                        Noun
                    </div>
                    <div className="text__content">
                        The word is formed by combining terms "ada" and "eden”. It reflects the idea of exploring and
                        using the resources that are around us at the moment and creating something new out of them, as
                        well as the idea of technology and the pursuit of the ideal place that humanity has dreamed of.
                    </div>
                </motion.div>
            </motion.div>

            {
                animationEnd ?
                    <PageWrapper/>
                    :
                    <></>
            }

            <motion.div
                variants={Animation.blockBigVariants}
                animate={animation}
                className="start__dots"
            >
                <motion.div
                    variants={Animation.blockSmallVariants}
                    animate={animation}
                    className={theme === "white" ? "start__dot" : "start__dot start__dot-white"}
                >
                </motion.div>
                <div className={theme === "white" ? "start__dot" : "start__dot start__dot-white"}></div>
            </motion.div>

            <div className="start__dots">
                <motion.div
                    variants={Animation.blockSmallVariants}
                    animate={animation}
                    className={theme === "white" ? "start__dot" : "start__dot start__dot-white"}
                >
                </motion.div>
                <div className={theme === "white" ? "start__dot" : "start__dot start__dot-white"}></div>
            </div>
        </div>
    );
}

export default App;
