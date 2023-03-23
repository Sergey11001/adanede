export const textVariants = {
    initial: {},
    animate: {
        left: "15%",
        transition: {
            duration: 1
        }
    }
};

export const blockBigVariants = {
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

export const blockSmallVariants = {
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


export const letter1Variants = {
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

export const letter2Variants = {
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
export const letter3Variants = {
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
export const letter4Variants = {
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
export const letter5Variants = {
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
export const letter6Variants = {
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
export const letter7Variants = {
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


export const containerLetters = {
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
