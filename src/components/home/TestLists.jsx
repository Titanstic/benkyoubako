import { motion } from "framer-motion";
import {TestVariants} from "../../utils/framerMotion.jsx";
import {useNavigate} from "react-router-dom";
import TestCard from "./TestCard.jsx";

const testData = [
    {
        id: 1,
        title: "JLPT N5 Quiz Test ",
        type: "quiz",
        description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
        button: "Try Now",
        route: "n5/quiz"
    },
    {
        id: 2,
        title: "JLPT N5 Vocabulary ",
        description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
        button: "Try Now",
        route: "n5/vocabulary"
    },
    {
        id: 3,
        title: "JLPT N5 Kanji ",
        description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
        button: "Try Now",
        route: "n5/kanji"
    },
    {
        id: 4,
        title: "JLPT N5 Grammar ",
        description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
        button: "Try Now",
        route: "n5/grammar"
    },
    {
        id: 5,
        title: "JLPT N4 Quiz Test ",
        description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
        button: "Try Now",
        route: "n4/quiz"
    },
    {
        id: 6,
        title: "JLPT N4 Vocabulary ",
        description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
        button: "Try Now",
        route: "n4/vocabulary"
    },
    {
        id: 7,
        title: "JLPT N4 Kanji  ",
        description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
        button: "Try Now",
        route: "n4/kanji"
    },
    {
        id: 4,
        title: "JLPT N4 Grammar ",
        description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
        button: "Try Now",
        route: "n4/grammar"
    },
]

const TestLists = ({ testHandler }) => {

    return(
        <motion.div variants={TestVariants} initial="hide" whileInView="show" className="flex justify-center items-center flex-col">
            {
                testData.map(data => (
                   <TestCard key={data.id} data={data} customFun={() => testHandler(data.route)}/>
                ))
            }
        </motion.div>
    )
}

export default TestLists