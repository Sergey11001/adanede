import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setProject} from "../../redux/slices/theme";

import './styles.scss'

const projects = ['neura', 'supreme', 'sakrai']

const Pagination = () => {
    const project = useSelector(state => state.theme.project)
    const [activeProject, setActiveProject] = useState(project)
    const dispatch = useDispatch()
    const handleChangeProject = (i) => {
        setActiveProject(projects[i])
        dispatch(setProject(projects[i]))
    }
    useEffect(() => {
        setActiveProject(project)
    },  [project])
    return (
        <div className="pagination">
            <ul className="project__dots">
                <li className={"active-dot " + `active-dot__${project}`} style={{left: (100 / (projects.length - 1) * (projects.indexOf(activeProject))) + '%', transform:`translateX(-${(100 / (projects.length - 1) * (projects.indexOf(activeProject))) + '%'})`}}>

                </li>
                {
                    projects.map((item, index) => (
                        <li
                            key={projects[index]}
                            onClick={() => handleChangeProject(index)}
                            className="project__dot"
                        >

                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Pagination;