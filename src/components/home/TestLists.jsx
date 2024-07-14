import { motion } from "framer-motion";
import {TestVariants} from "../../utils/framerMotion.jsx";
import {useNavigate} from "react-router-dom";
import TestCard from "./TestCard.jsx";

const testData = [
    {
        id: 1,
        title: "JLPT N5 Quiz TestLists ",
        type: "quiz",
        description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
        button: "Try Now"
    },
    {
        id: 2,
        title: "JLPT N5 Quiz TestLists ",
        description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
        type: "quiz",
        button: "Try Now"
    },
    {
        id: 3,
        title: "JLPT N5 Quiz TestLists ",
        description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
        type: "quiz",
        button: "Try Now"
    },
    {
        id: 4,
        title: "JLPT N5 Quiz TestLists ",
        description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
        type: "quiz",
        button: "Try Now"
    },
    {
        id: 5,
        title: "JLPT N5 Quiz TestLists ",
        description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
        type: "vocabulary",
        button: "Try Now"
    },
    {
        id: 6,
        title: "JLPT N5 Quiz TestLists ",
        description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
        type: "grammer",
        button: "Locked"
    },
    {
        id: 7,
        title: "JLPT N5 Quiz TestLists ",
        description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
        type: "kanji",
        button: "Locked"
    },
]

const TestLists = () => {
    const navigate = useNavigate();

    // start function
    const testHandler = (type, id) => {
        navigate(`/test/${type}/${id}`)
    }
    // end function

    return(
        <motion.div variants={TestVariants} initial="hide" whileInView="show" className="flex justify-center items-center flex-col">
            {
                testData.map(data => (
                   <TestCard key={data.id} data={data} customFun={() => testHandler(data.type, data.id, )}/>
                ))
            }
        </motion.div>
    )
}

export default TestLists