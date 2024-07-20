import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faBook} from "@fortawesome/free-solid-svg-icons";

const TestCard = ({ data, cardButtonHandler }) => {
    return(
        <div className="col-span-6 md:col-span-2 border shadow-lg rounded-md p-4">
            <p className="inline-block bg-border_color bg-opacity-20 border border-border_color text-border_color text-sm rounded-lg px-4 py-2">Completed</p>

            <div className="flex justify-between border-b text-xl font-bold py-4">
                <p><FontAwesomeIcon icon={faBook} className="pe-3"/> {data.test_name}</p>
                <p>0/{data.total_mark}</p>
            </div>

            <div className="flex justify-between items-center mt-5">
                <p className="text-lg">Try Now  <FontAwesomeIcon className="pl-3" icon={faArrowRight} /></p>
                <button className="border border-red-600 bg-red-600 bg-opacity-20 text-red-600 rounded-lg px-5 py-1" onClick={() => cardButtonHandler(data.id)}>{ data.checked === "point" ? "Free" : "Paid" }</button>
            </div>
        </div>
    )
};

export default TestCard;