// --------- Start Home
export const homeVariants = {
    hide: {
        x: "-100%",
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.1,
            delayChildren: 0.3,
            staggerChildren: 0.8,
            when: "beforeChildren",
        },
    },
};

export const dataVariants = {
    hide: {
        x: "-50%",
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.4 },
    },
};

export const dateVariants = {
    hide: {
        x: "100%",
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
        },
    },
};
//--------- End Home

//--------- Start Level
export const CardVariants = {
    hide: {
        y: "100%",
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, staggerChildren: 0.5, when: "beforeChildren"}
    }
};

export const CardItemVariants = {
    hide: {
        y: "50%",
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5}
    }
}
//--------- End Level

//--------- Start Test
export const TestVariants = {
    hide: {
        x: "100%",
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, staggerChildren: 0.5, when: "beforeChildren" },
    },
};

export const TestItemVariants = {
    hide: {
        x: "50%",
        opacity: 0,
    },
    show: {
        x: "0",
        opacity: 1,
        transition: { duration: 0.8 },
    },
};
//--------- End Test
