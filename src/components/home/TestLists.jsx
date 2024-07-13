import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import {TestItemVariants, TestVariants} from "../../utils/framerMotion.jsx";

const testData = [
    {
        id: 1,
        title: "JLPT N5 Quiz TestLists ",
        description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
        button: "Try Now"
    },
    {
        id: 2,
        title: "JLPT N5 Quiz TestLists ",
        description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
        button: "Try Now"
    },
    {
        id: 3,
        title: "JLPT N5 Quiz TestLists ",
        description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
        button: "Try Now"
    },
    {
        id: 4,
        title: "JLPT N5 Quiz TestLists ",
        description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
        button: "Try Now"
    },
    {
        id: 5,
        title: "JLPT N5 Quiz TestLists ",
        description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
        button: "Try Now"
    },
    {
        id: 6,
        title: "JLPT N5 Quiz TestLists ",
        description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
        button: "Locked"
    },
    {
        id: 7,
        title: "JLPT N5 Quiz TestLists ",
        description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
        button: "Locked"
    },
]

const TestLists = () => {
    return(
        <motion.div variants={TestVariants} initial="hide" whileInView="show" className="flex justify-center items-center flex-col">
            {
                testData.map(data => (
                    <motion.div variants={TestItemVariants} className="w-[95%] md:w-[60%] border-l-2 border-primary mb-5 md:mb-10 px-3 py-5 md:px-8 md:py-7" key={data.id}>
                        <div className="flex justify-between mb-2">
                            <p className="md:text-xl font-bold mb-3 md:mb-5">{data.title}</p>
                            <button className="w-24 md:w-32 bg-primary md:text-lg py-2 rounded-lg text-white shadow-md transition-colors duration-200 ease-linear hover:bg-white hover:text-primary hover:border hover:border-primary">
                                {data.button === "Locked" ? <FontAwesomeIcon icon={faLock}/> : ""}
                                <span
                                    className={`${data.button === 'Locked' ? "ml-2 md:ml-4" : ""}`}>{data.button}</span>
                            </button>
                        </div>

                        <p className="md:text-lg">{data.description}</p>
                    </motion.div>
                ))
            }
        </motion.div>
    )
}

export default TestLists