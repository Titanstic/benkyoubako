import bgImage from '../../assets/bg_card.png';
import { motion } from "framer-motion";
import {CardItemVariants, CardVariants} from "../../utils/framerMotion.jsx";

const Card = ({ color, label, borderColor, level }) => {
    return (
        <motion.div variants={CardVariants} initial="hide" whileInView="show" className={`h-72 w-[95%] md:w-[75%] col-span-6 md:col-span-2 border-4 ${borderColor} rounded-md flex justify-center items-center flex-col font-bold text-2xl relative`}>

            {label}

            <motion.p variants={CardItemVariants} className="absolute left-0 top-4 z-40 text-white">JLPT</motion.p>

            <motion.div className="w-[90%] h-[89%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <div
                    className={`w-full h-full rounded-lg flex items-center justify-center flex-col transition-colors duration-300 ease-linear origin-top-left   ${color}`}>
                    <p className="text-3xl">日本語</p>
                    <p>{level}</p>
                </div>
            </motion.div>

            <img className="absolute bottom-4 px-3 z-40" src={bgImage} alt="bg"/>
        </motion.div>
    )
};

export default Card;