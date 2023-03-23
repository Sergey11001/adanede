import React, {memo, useEffect} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import {motion} from "framer-motion";

import "./styles.scss"
import {useDispatch, useSelector} from "react-redux";
import {setProject, setTheme} from "../../redux/slices/theme";

const Navigation = () => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme.theme)
    const location = useLocation()
    console.log(location)
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
            <li className="left__nav-item"><Link to="/about">about</Link></li>
            <li className="left__nav-item"><Link to="/projects">projects</Link></li>
            <li className="left__nav-item"><Link to="/white_paper">whitepaper</Link></li>
            <li className="left__nav-item">
                <Link to="/investors/plan">investor's</Link>
                {
                    location.pathname. includes("/investors") ?
                        <motion.ul
                            animate={{opacity:1}}
                            initial={{opacity:0}}
                            transition={{duration:1}}
                            className="extra"
                        >
                            <li className="extra-item">
                                <Link to="/investors/plan">plan</Link>
                            </li>
                            <li className="extra-item">
                                <Link to="/investors/vision">vision</Link>
                            </li>
                            <li className="extra-item">
                                <Link to="/investors/stats">stats</Link>
                            </li>
                        </motion.ul>
                        :
                        null
                }
            </li>
            <li className="left__nav-item"><Link to="/contacts">contacts</Link></li>
        </ul>
    );
};

export default memo(Navigation);