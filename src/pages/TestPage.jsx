import TestCard from "../components/home/TestCard.jsx";
import Question from "../components/test/Question.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import DetailQuestion from "../components/test/DetailQuestion.jsx";

const data =  {
    id: 1,
    title: "JLPT N5 Quiz TestLists ",
    description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
    button: "Try Now"
};

const questions = [
    {
        id: 1,
        description: "学校へ行く______、友だちに会いました。",
        answer: [ "へ行く", "へ行く", "へ行く", "へ行く"],
        correctAnswer: 1
    },
    {
        id: 2,
        description: "学校へ行く______、友だちに会いまし。",
        answer: [ "へ行く", "へ行く", "へ行く", "へ行く"],
        correctAnswer: 1
    },
    {
        id: 3,
        description: "学校へ行く______、友だちに会いま。",
        answer: [ "へ行く", "へ行く", "へ行く", "へ行く"],
        correctAnswer: 1
    },
    {
        id: 4,
        description: "学校へ行く______、友だちに会い。",
        answer: [ "へ行く", "へ行く", "へ行く", "へ行く"],
        correctAnswer: 1
    },
    {
        id: 5,
        description: "学校へ行く______、友だちに会。",
        answer: [ "へ行く", "へ行く", "へ行く", "へ行く"],
        correctAnswer: 1
    },
    // {
    //     id: 6,
    //     description: "学校へ行く______、友だちに会いました。",
    //     answer: [ "へ行く", "へ行く", "へ行く", "へ行く"],
    //     correctAnswer: 1
    // },
    // {
    //     id: 7,
    //     description: "学校へ行く______、友だちに会いました。",
    //     answer: [ "へ行く", "へ行く", "へ行く", "へ行く"],
    //     correctAnswer: 1
    // },
    // {
    //     id: 8,
    //     description: "学校へ行く______、友だちに会いました。",
    //     answer: [ "へ行く", "へ行く", "へ行く", "へ行く"],
    //     correctAnswer: 1
    // },
    // {
    //     id: 9,
    //     description: "学校へ行く______、友だちに会いました。",
    //     answer: [ "へ行く", "へ行く", "へ行く", "へ行く"],
    //     correctAnswer: 1
    // },
    // {
    //     id: 10,
    //     description: "学校へ行く______、友だちに会いました。",
    //     answer: [ "へ行く", "へ行く", "へ行く", "へ行く"],
    //     correctAnswer: 1
    // },
]

const TestPage = () => {
    const navigate = useNavigate();
    const [showQuestion, setShowQuestion] = useState(false);
    const [finsihAnswer, setFinishAnswer] = useState(false);
    const [answerData, setAnswerData] = useState([]);
    const [finalResult, setFinalResult] = useState([]);

    const questionHandler = () => {
        if(confirm("Are you sure?")){
            setShowQuestion(true);
        }else{
            setShowQuestion(false);
        }
    };

    const answerHandler = (id, answer) => {
        const copArr = answerData;
        copArr[id] = answer;
        setAnswerData(copArr);
    }

    const confirmHandler = () => {
        if(confirm("Are you sure?")){
            // check user answer
            const data = [];
            questions.forEach((question, index) => {
                data.push({
                    ...question,
                    userAnswer: answerData[index],
                    getPoint : data.correctAnswer === answerData[index]
                })

            })

            setFinalResult(data);
            setFinishAnswer(true);
        }else{
            setFinishAnswer(false);
        }
    }


    return(
        <div className="h-screen grid grid-cols-10">
            <div className="hidden md:block md:col-span-2 bg-[#D9D9D9] text-center shadow pt-24">
                <p className="text-lg font-bold">JLPT N5</p>
            </div>

            <div className="col-span-10 md:col-span-8 px-1 md:px-10 overflow-y-auto pt-24 pb-10">
                {/*Start Nav*/}
                <div className="mb-5">
                    <p className="text-lg font-bold">
                        <span className="cursor-pointer hover:underline hover:text-primary"
                              onClick={() => navigate("/")}>Home</span>
                        &gt; n5  &gt;
                        <span className="text-primary">Vocab</span>
                    </p>
                </div>
                {/*End Nav*/}

                {/*Start Question Title*/}
                {
                    !showQuestion &&
                    <TestCard data={data} customFun={questionHandler}/>
                }

                <div className="md:p-5 relative">
                    {
                        !showQuestion &&
                        <div className="w-full h-full absolute top-0 left-0 z-40"></div>
                    }

                    {
                        finsihAnswer ?
                            <>
                                <p className="font-bold text-lg text-center bg-border_color bg-opacity-20 border border-border_color rounded-md py-2 mb-5">Result = 15 / 20</p>
                                {
                                    finalResult.map(result => (
                                        <DetailQuestion key={result.id} data={result}/>
                                    ))
                                }
                            </>
                            :
                            <>
                                {
                                    questions.map((question, index) => (
                                        <div key={question.id} className={`${showQuestion ? "blur-0" : "blur-sm"} bg-gray-100 border border-primary p-2 md:p-4 rounded mb-3`}>
                                            <Question data={question} showQuestion={showQuestion} id={index} customFun={answerHandler}/>
                                        </div>
                                    ))
                                }
                                <div className="flex justify-end">
                                    <button
                                        className={`text-lg bg-primary border border-transparent text-white rounded-lg shadow-md ${showQuestion ? "blur-0" : "blur-sm"} px-7 py-2 hover:bg-white hover:border-primary hover:text-primary`}
                                        onClick={confirmHandler}>
                                        Submit
                                    </button>
                                </div>
                            </>

                }


                </div>
                {/*End Question Title*/}

            </div>
        </div>
    )
};

export default TestPage