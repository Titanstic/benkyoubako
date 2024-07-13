import bgImage from '../../assets/bg_card.png';

const Card = ({ color, label, borderColor, level }) => {
    return (
        <div className={`h-72 w-[95%] md:w-[75%] col-span-6 md:col-span-2 border-4 ${borderColor} rounded-md flex justify-center items-center flex-col font-bold text-2xl relative`}>

            {label}

            <img className="absolute bottom-4 px-3 z-0 " src={bgImage} alt="bg"/>
            <p className="absolute left-0 top-4 text-white">JLPT</p>

            <div className={`w-[90%] h-[89%] rounded-lg flex items-center justify-center flex-col  ${color}`}>
                <p className="text-3xl">日本語</p>
                <p>{level}</p>
            </div>

        </div>
    )
};

export default Card;