import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";

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
        <div className="flex justify-center items-center flex-col">
            {
                testData.map(data => (
                    <div className="w-[60%] border-l-2 border-primary flex justify-between mb-10 px-8 py-7" key={data.id}>
                        <div>
                            <p className="text-xl font-bold mb-5">{data.title}</p>
                            <p className="text-lg">{data.description}</p>
                        </div>

                        <div>
                            <button className="w-32 bg-primary text-lg py-2 rounded-lg text-white shadow-md hover:bg-white hover:text-primary hover:border hover:border-primary">
                                {data.button === "Locked" ?  <FontAwesomeIcon icon={faLock} /> : ""}
                                <span className={`${data.button === 'Locked' ? "ml-4" : ""}`}>{data.button}</span>
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TestLists