import {useEffect, useState} from "react";

import "./App.scss"
import {motion, useAnimation} from "framer-motion"

import letterA from "./assets/logoTitle/A.svg"
import letterE from "./assets/logoTitle/E.svg"
import letterN from "./assets/logoTitle/N.svg"
import letterV from "./assets/logoTitle/V.svg"
import logo from "./assets/logo.svg"
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Whitepaper from "./pages/Whitepaper";
import AppRoutes from "./components/AppRoutes";
import {Link} from "react-router-dom";
import PageWrapper from "./components/PageWrapper";
import {useSelector} from "react-redux";


const textVariants = {
    initial: {},
    animate: {
        left: "15%",
        transition: {
            duration: 1
        }
    }
};

const blockBigVariants = {
    initial: {
        bottom: '13%'
    },
    animate: {
        top: '13%',
        transition: {
            duration: 1
        }
    }
}

const blockSmallVariants = {
    initial: {
        right: 0
    },
    animate: {
        left: 0,
        transition: {
            duration: 1,
            delay: 1
        }
    }
}


const letter1Variants = {
    initial: {
        left: "50%",
        transform: 'translateX(-50%)'
    },
    animate: {
        left: "15%",
        transform: 'translateX(0)',
        transition: {
            duration: 1
        }
    }
}

const letter2Variants = {
    initial: {
        left: "50%",
        transform: 'translateX(-50%)'
    },
    animate: {
        left: "27%",
        transform: 'translateX(0)',
        transition: {
            duration: 1
        }
    }
}
const letter3Variants = {
    initial: {
        left: "50%",
        transform: 'translateX(-50%)'
    },
    animate: {
        left: "38%",
        transform: 'translateX(0)',
        transition: {
            duration: 1
        }
    }
}
const letter4Variants = {
    initial: {
        left: "50%",
        transform: 'translateX(-50%)'
    },
    animate: {
        left: "50%",
        transform: 'translateX(0)',
        transition: {
            duration: 1
        }
    }
}
const letter5Variants = {
    initial: {
        left: "50%",
        transform: 'translateX(calc(-50% + 20px))'
    },
    animate: {
        left: "60%",
        transform: 'translateX(0)',
        transition: {
            duration: 1
        }
    }
}
const letter6Variants = {
    initial: {
        left: "50%",
        transform: 'translateX(-50%)'
    },
    animate: {
        left: "70%",
        transform: 'translateX(0)',
        transition: {
            duration: 1
        }
    }
}
const letter7Variants = {
    initial: {
        left: "50%",
        transform: 'translateX(calc(-50% + 20px))'
    },
    animate: {
        left: "81%",
        transform: 'translateX(0)',
        transition: {
            duration: 1
        }
    }
}


const containerLetters = {
    initial: {
        opacity: 1,
        filter: "blur(0)",
    },
    animate: {
        filter: "blur(30px)",
        opacity: 0,
        transition: {
            duration: 0.8,
            delay: 2
        }
    },
}


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
                variants={containerLetters}
                animate={animation}
                className="start">
                <div className="letters">
                    <motion.img
                        variants={letter1Variants}
                        animate={animation}
                        className="letter"
                        src={letterA}
                        alt="A"
                    />
                    <motion.img
                        variants={letter2Variants}
                        animate={animation}
                        className="letter"
                        src={letterV}
                        alt="A"
                    />
                    <motion.img
                        variants={letter3Variants}
                        animate={animation}
                        className="letter"
                        src={letterA}
                        alt="A"
                    />
                    <motion.img
                        variants={letter4Variants}
                        animate={animation}
                        className="letter"
                        src={letterN}
                        alt="A"
                    />
                    <motion.img
                        variants={letter5Variants}
                        animate={animation}
                        className="letter letterE"
                        src={letterE}
                        alt="A"
                    />
                    <motion.img
                        variants={letter6Variants}
                        animate={animation}
                        className="letter"
                        src={letterV}
                        alt="A"
                    />
                    <motion.img
                        variants={letter7Variants}
                        animate={animation}
                        className="letter letterE"
                        src={letterE}
                        alt="A"
                    />
                </div>
                <motion.div
                    variants={textVariants}
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
                variants={blockBigVariants}
                animate={animation}
                className="start__dots"
            >
                <motion.div
                    variants={blockSmallVariants}
                    animate={animation}
                    className={theme === "white" ? "start__dot" : "start__dot start__dot-white"}
                >
                </motion.div>
                <div className={theme === "white" ? "start__dot" : "start__dot start__dot-white"}></div>
            </motion.div>

            <div className="start__dots">
                <motion.div
                    variants={blockSmallVariants}
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
