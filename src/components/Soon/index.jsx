import React from 'react';
import './styles.scss'

import text from "../../assets/blur-text.svg"

const Soon = () => {
    return (
        <div className="soon__body">
            <div className="blur">
                <span>
                    /coming soon//
                </span>
            </div>
            <div className="bd__blur-text">
                <img src={text} alt="" className="text--blur"/>
            </div>
        </div>
    );
};

export default Soon;