import React from 'react';
import {motion} from "framer-motion";

import './styles.scss'

const About = () => {
    return (
        <motion.div
            initial={{opacity:0, filter:'blur(80px)'}}
            animate = {{opacity:1,  filter:'blur(0)'}}
            transition={{duration: 0.5}}
            exit={{opacity:0, filter:'blur(80px)'}}
            exittransition = {{duration: 0.5}}
            className="about__body"
        >
            <div className="about__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit felis, gravida vel mattis eget,
                molestie non sem. Vestibulum aliquam sagittis neque sit amet congue. Fusce vitae eros rutrum, commodo mi
                non, convallis ex. Sed vitae lorem nibh. Aliquam molestie metus eu elit gravida dictum. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
                <br/><br/>
                <br/>
                Fusce velit felis, gravida vel mattis eget, molestie non sem. Vestibulum aliquam sagittis neque sit amet
                congue. Fusce vitae eros rutrum, commodo mi non, convallis ex. Sed vitae lorem nibh. Aliquam molestie
                metus eu elit gravida dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit
                felis, gravida vel mattis eget, molestie non sem. Vestibulum aliquam sagittis neque sit amet congue.
                Fusce vitae eros rutrum, commodo mi non, convallis ex. Sed vitae lorem nibh. Aliquam molestie metus eu
                elit gravida dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit felis, gravida
                vel mattis eget, molestie non sem. Vestibulum aliquam sagittis neque sit amet congue.
                <br/>
                <br/>
                <br/>
                <br/>
                Fusce vitae eros rutrum, commodo mi non, convallis ex. Sed vitae lorem nibh. Aliquam molestie metus eu
                elit gravida dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit felis, gravida
                vel mattis eget, molestie non sem. Vestibulum aliquam sagittis neque sit amet congue. Fusce vitae eros
                rutrum, commodo mi non, convallis ex. Sed vitae lorem nibh. Aliquam molestie metus eu elit gravida
                dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit
            </div>
        </motion.div>
    );
};

export default About;