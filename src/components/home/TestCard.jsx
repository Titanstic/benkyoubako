import {motion} from "framer-motion";
import {TestItemVariants} from "../../utils/framerMotion.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";

const TestCard = ({ data, customFun }) => {
    return (
        <motion.div variants={TestItemVariants} className="w-[95%] md:w-[70%] border-l-2 border-primary mb-5 md:mb-10 px-3 py-3 md:px-8 md:py-7">
            <div className="flex justify-between items-center mb-2">
                <p className="md:text-xl font-bold mb-3 md:mb-4">{data.title}</p>
                <button className="w-24 md:w-32 bg-primary md:text-lg py-2 rounded-lg text-white shadow-md border border-primary transition-colors duration-200 ease-linear hover:bg-white hover:text-primary hover:border hover:border-primary" onClick={customFun}>
                    {data.button === "Locked" ? <FontAwesomeIcon icon={faLock}/> : ""}
                    <span
                        className={`${data.button === 'Locked' ? "ml-2 md:ml-4" : ""}`}>{data.button}</span>
                </button>
            </div>

            <p className="text-sm md:text-lg">{data.description}</p>
        </motion.div>
    )
};

export default TestCard;