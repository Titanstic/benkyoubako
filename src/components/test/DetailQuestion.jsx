import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";

const DetailQuestion = ({ data }) => {
    return(
        <div className="bg-gray-100 border border-primary p-4 rounded mb-3">
            <div className="flex items-start md:items-center ">
                <p className="inline-flex w-8 h-8 border-2 border-gray-500 font-bold shadow-2xl rounded-md  justify-center items-center mr-2 md:mr-5">{data.id}</p>
                <p className="font-bold inline-block">{data.question_text}</p>
            </div>

            {
                data.multiple_choice.map((ans, index) => (
                    data.answers[0].answer_text === ans ?
                        <div className={`flex items-center mb-2  ml-7 md:ml-10 border-2 border-border_color  bg-border_color bg-opacity-20 px-4 py-3 relative`} key={index}>
                            <input id={`${data.id}${index}`} type="radio" value={ans}  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 corrects" checked disabled/>
                            <label className="ms-2 text-sm font-medium">{ans}</label>
                            <FontAwesomeIcon  className="text-border_color text-lg md:text-3xl absolute right-6 top-1/2 -translate-y-1/2" icon={faCheck} />
                        </div>
                        :
                        data.userAnswer === ans ?
                            <div className={`flex items-center mb-2 ml-7 md:ml-10 bg-red-800 bg-opacity-20 border-2 border-red-600 px-4 py-3 relative`} key={index}>
                                <input id={`${data.id}${index}`} type="radio" value={ans} className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 incorrects`} checked disabled/>
                                <label className="ms-2 text-sm font-medium">{ans}</label>
                                <FontAwesomeIcon className="text-red-600 text-lg md:text-3xl absolute right-6 top-1/2 -translate-y-1/2" icon={faXmark} />
                            </div>
                            :
                            <div className={`flex items-center mb-2  ml-7 md:ml-10 px-4 py-3`} key={index}>
                                <input id={`${data.id}${index}`} type="radio" value={ans} className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300`} disabled/>
                                <label className="ms-2 text-sm font-medium">{ans}</label>
                            </div>
                ))
            }
        </div>
    )
};

export default DetailQuestion;