import React from 'react';
import './styles.scss'
import {motion} from "framer-motion";

import contact1 from "../../assets/contacts/contact1.svg"
import contact2 from "../../assets/contacts/contact2.svg"
import contact3 from "../../assets/contacts/contact3.svg"

const Contacts = () => {
    return (
        <motion.div
            initial={{opacity:0, filter:'blur(80px)'}}
            animate = {{opacity:1,  filter:'blur(0)'}}
            transition={{duration: 0.5}}
            exit={{opacity:0, filter:'blur(80px)'}}
            exittransition = {{duration: 0.5}}
            className="contacts__body"
        >
            <ul className="contacts__list">
                <li className="contact__item">
                    <img src={contact1} alt="" className="contact__img"/>
                    <div className="contact__title">
                        Adanede
                    </div>
                    <ul className="contact__links">
                        <li className="contact__link">
                            <a href="#">@adanedeofficial</a>
                        </li>
                        <li className="contact__link">
                            <a href="#">@adanedeofficial</a>
                        </li>
                        <li className="contact__link">
                            <a href="#">@adanedeofficial</a>
                        </li>
                    </ul>
                </li>
                <li className="contact__item">
                    <img src={contact2} alt="" className="contact__img"/>
                    <div className="contact__title">
                        Associated
                    </div>
                    <ul className="contact__links">
                        <li className="contact__link">
                            <a href="#">@adanedeofficial</a>
                        </li>
                        <li className="contact__link">
                            <a href="#">@adanedeofficial</a>
                        </li>
                        <li className="contact__link">
                            <a href="#">@adanedeofficial</a>
                        </li>
                    </ul>
                </li>
                <li className="contact__item">
                    <img src={contact3} alt="" className="contact__img"/>
                    <div className="contact__title">
                        Behind the scene
                    </div>
                    <div className="contact__text">
                        These people were the architects of our technological universe, the guardians of our digital
                        realm. They worked tirelessly in the shadows. Their work was not for fame or recognition, but
                        for the satisfaction of knowing that they were part of something bigger than themselves,
                        something that would make a change
                    </div>
                </li>
            </ul>
        </motion.div>
    );
};

export default Contacts;