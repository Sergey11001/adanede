import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {motion, useAnimation} from "framer-motion";

import AppRoutes from "../AppRoutes";

import "./styles.scss"

import Navigation from "../Navigation";
import {useSelector} from "react-redux";
import Pagination from "../Pagination";
import RightText from "../RightText";


const PageWrapper = () => {
    const {theme, project} = useSelector(state => state.theme)
    const [closeProjects, setClosedProjects] = useState(true)

    useEffect(() => {
        let timer;
        if (project === '') {
            timer = setTimeout(() => setClosedProjects(true), 1800)
        } else {
            setClosedProjects(false)
        }
        return () => clearTimeout(timer)
    }, [project])
    return (
        <motion.div
            initial={{opacity: 0, filter: 'blur(80px)'}}
            animate={{opacity: 1, filter: 'blur(0)'}}
            transition={{duration: 0.2}}
            className="main__pages"
        >
            <Navigation/>

            <div className="page">
                <Link to="/" className="logo">
                    <svg className={theme === 'white' ? "logo__img" : "logo__img logo__img-white"} width="17"
                         height="50" viewBox="0 0 17 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M0.5 49.5H17V0H0.5V49.5ZM12.875 4.125H4.625V25.41H12.875V4.125ZM12.875 29.535H4.625V45.375H12.875V29.535Z"/>
                    </svg>
                    <div className={theme === "white" ? "logo__name" : "logo__name logo__name-white"}>
                        ADANEDE
                    </div>
                </Link>
                <div className={"page__content--wrapper " + `page__content--wrapper-${project}`}>
                    {
                        closeProjects ?
                            <div
                                className="wrapper--blur"
                                style={{backgroundColor: project ? "" : "#DEDED8"}}
                            >
                            </div>
                            :
                            <></>
                    }
                    {
                        theme === "white" ?
                            (closeProjects &&
                                <>
                                    <div className="blur-block top--blur">

                                    </div>
                                    <div className="blur-block bottom--blur">

                                    </div>
                                </>
                            )
                            :
                            <div className={"project-logo " + `project-logo-${project}`}></div>
                    }

                    <div className="page__content" style={!closeProjects ? {overflow:"hidden"} : null}>
                        <AppRoutes/>
                        {
                            project ?
                                <Pagination/>
                                :
                                <></>
                        }
                    </div>
                </div>
            </div>

            <RightText/>

        </motion.div>
    );
};

export default PageWrapper;