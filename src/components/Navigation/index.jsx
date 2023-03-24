import React, {memo, useEffect} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";

import "./styles.scss"
import {useDispatch, useSelector} from "react-redux";
import {setProject, setTheme} from "../../redux/slices/theme";

const Navigation = () => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme.theme)
    const location = useLocation()
    useEffect(() => {
        if (location.pathname === '/projects') {
            dispatch(setTheme('black'))
            dispatch(setProject('neura'))
        } else {
            dispatch(setTheme('white'))
            dispatch(setProject(''))
        }
    }, [location])

    return (
        <ul className={theme === "white" ? "left__nav" : "left__nav left__nav-white"}>
            <li className="left__nav-item">
                <AnimatePresence>
                    {
                        location.pathname.includes('about') ?
                            <motion.p
                                initial={{opacity:0, top:'-10px', filter:'blur(5px)'}}
                                animate={{opacity:1, top:'-5px', filter:'blur(0)'}}
                                exit={{opacity:0, top:'-10px', filter:'blur(5px)'}}
                                transition={{duration:0.5}}
                                className="animation--item"
                            >
                                about
                            </motion.p>
                            :
                            null
                    }
                </AnimatePresence>
                <Link
                    to="/about"
                    className={location.pathname.includes('about') ? "nav--item-text nav--item-opacity" : "nav--item-text"}
                >
                    about
                </Link>
            </li>
            <li className="left__nav-item">
                <AnimatePresence>
                    {
                        location.pathname.includes('projects') ?
                            <motion.p
                                initial={{opacity:0, top:'-10px', filter:'blur(5px)'}}
                                animate={{opacity:1, top:'-5px', filter:'blur(0)'}}
                                exit={{opacity:0, top:'-10px', filter:'blur(5px)'}}
                                transition={{duration:0.5}}
                                className={"animation--item " + (theme ? "animation--item-white" : "")}
                            >
                                projects
                            </motion.p>
                            :
                            null
                    }
                </AnimatePresence>
                <Link
                    to="/projects"
                    className={location.pathname.includes('projects') ? "nav--item-text nav--item-opacity" : "nav--item-text"}
                >
                    projects
                </Link>
            </li>
            <li className="left__nav-item">
                <AnimatePresence>
                    {
                        location.pathname.includes('whitepaper') ?
                            <motion.p
                                initial={{opacity:0, top:'-10px', filter:'blur(5px)'}}
                                animate={{opacity:1, top:'-5px', filter:'blur(0)'}}
                                exit={{opacity:0, top:'-10px', filter:'blur(5px)'}}
                                transition={{duration:0.5}}
                                className="animation--item"
                            >
                                whitepaper
                            </motion.p>
                            :
                            null
                    }
                </AnimatePresence>
                <Link
                    to="/whitepaper"
                    className={location.pathname.includes('whitepaper') ? "nav--item-text nav--item-opacity" : "nav--item-text"}
                >
                    whitepaper
                </Link>
            </li>
            <li className="left__nav-item">
                <AnimatePresence>
                    {
                        location.pathname.includes('investors') ?
                            <motion.p
                                initial={{opacity:0, top:'-10px', filter:'blur(5px)'}}
                                animate={{opacity:1, top:'-5px', filter:'blur(0)'}}
                                exit={{opacity:0, top:'-10px', filter:'blur(5px)'}}
                                transition={{duration:0.5}}
                                className="animation--item"
                            >
                                investor's
                            </motion.p>
                            :
                            null
                    }
                </AnimatePresence>
                <Link
                    to="/investors/plan"
                    className={location.pathname.includes('investors') ? "nav--item-text nav--item-opacity" : "nav--item-text"}
                >
                    investor's
                </Link>
                {
                    location.pathname.includes("/investors") ?
                        <motion.ul
                            animate={{opacity: 1}}
                            initial={{opacity: 0}}
                            transition={{duration: 1}}
                            className="extra"
                        >
                            <li className="extra-item">
                                <AnimatePresence>
                                    {
                                        location.pathname.includes('plan') ?
                                            <motion.p
                                                initial={{opacity:0, top:'-10px', filter:'blur(5px)'}}
                                                animate={{opacity:1, top:'-5px', filter:'blur(0)'}}
                                                exit={{opacity:0, top:'-10px', filter:'blur(5px)'}}
                                                transition={{duration:0.5}}
                                                className="animation--item"
                                            >
                                                plan
                                            </motion.p>
                                            :
                                            null
                                    }
                                </AnimatePresence>
                                <Link
                                    to="/investors/plan"
                                    className={location.pathname.includes('plan') ? "nav--item-text nav--item-opacity" : "nav--item-text"}
                                >
                                    plan
                                </Link>
                            </li>
                            <li className="extra-item">
                                <AnimatePresence>
                                    {
                                        location.pathname.includes('vision') ?
                                            <motion.p
                                                initial={{opacity:0, top:'-10px', filter:'blur(5px)'}}
                                                animate={{opacity:1, top:'-5px', filter:'blur(0)'}}
                                                exit={{opacity:0, top:'-10px', filter:'blur(5px)'}}
                                                transition={{duration:0.5}}
                                                className="animation--item"
                                            >
                                                vision
                                            </motion.p>
                                            :
                                            null
                                    }
                                </AnimatePresence>
                                <Link
                                    to="/investors/vision"
                                    className={location.pathname.includes('vision') ? "nav--item-text nav--item-opacity" : "nav--item-text"}
                                >
                                    vision
                                </Link>
                            </li>
                            <li className="extra-item">
                                <AnimatePresence>
                                    {
                                        location.pathname.includes('stats') ?
                                            <motion.p
                                                initial={{opacity:0, top:'-10px', filter:'blur(5px)'}}
                                                animate={{opacity:1, top:'-5px', filter:'blur(0)'}}
                                                exit={{opacity:0, top:'-10px', filter:'blur(5px)'}}
                                                transition={{duration:0.5}}
                                                className="animation--item"
                                            >
                                                stats
                                            </motion.p>
                                            :
                                            null
                                    }
                                </AnimatePresence>
                                <Link
                                    to="/investors/stats"
                                    className={location.pathname.includes('stats') ? "nav--item-text nav--item-opacity" : "nav--item-text"}
                                >
                                    stats
                                </Link>
                            </li>
                        </motion.ul>
                        :
                        null
                }
            </li>
            <li className="left__nav-item">
                <AnimatePresence>
                    {
                        location.pathname.includes('/contacts') ?
                            <motion.p
                                initial={{opacity:0, top:'-10px', filter:'blur(5px)'}}
                                animate={{opacity:1, top:'-5px', filter:'blur(0)'}}
                                exit={{opacity:0, top:'-10px', filter:'blur(5px)'}}
                                transition={{duration:0.5}}
                                className="animation--item"
                            >
                                contacts
                            </motion.p>
                            :
                            null
                    }
                </AnimatePresence>
                <Link
                    to="/contacts"
                    className={location.pathname.includes('contacts') ? "nav--item-text nav--item-opacity" : "nav--item-text"}
                >
                    contacts
                </Link>
            </li>
        </ul>
    );
};

export default memo(Navigation);