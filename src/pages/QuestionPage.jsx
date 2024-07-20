import TestCard from "../components/home/TestCard.jsx";
import Question from "../components/test/Question.jsx";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import DetailQuestion from "../components/test/DetailQuestion.jsx";
import TestSideBar from "../components/test/TestSideBar.jsx";
import {useLazyQuery} from "@apollo/client";
import {GET_QUESTION, TEST_NAME_BY_ID} from "../graphql/query/TestName.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getDataFailure, getDataStart, getQuestionData} from "../redux/QuerySlice.jsx";

const data =  {
    id: 1,
    title: "JLPT N5 Quiz TestLists ",
    description: "300 Voabs . 200 Grammar . 100 Kanji . Each TestLists has 20 Questions",
    button: "Try Now"
};

// const questions = [
//     {
//         id: 1,
//         description: "学校へ行く______、友だちに会いました。",
//         answer: [ "へ行く", "へ行く", "へ行く", "へ行く"],
//         correctAnswer: 1
//     },
//     {
//         id: 2,
//         description: "学校へ行く______、友だちに会いまし。",
//         answer: [ "へ行く", "へ行く", "へ行く", "へ行く"],
//         correctAnswer: 1
//     },
//     {
//         id: 3,
//         description: "学校へ行く______、友だちに会いま。",
//         answer: [ "へ行く", "へ行く", "へ行く", "へ行く"],
//         correctAnswer: 1
//     },
//     {
//         id: 4,
//         description: "学校へ行く______、友だちに会い。",
//         answer: [ "へ行く", "へ行く", "へ行く", "へ行く"],
//         correctAnswer: 1
//     },
//     {
//         id: 5,
//         description: "学校へ行く______、友だちに会。",
//         answer: [ "へ行く", "へ行く", "へ行く", "へ行く"],
//         correctAnswer: 1
//     }
// ]

const QuestionPage = () => {
    const navigate = useNavigate();
    const { level, type, id } = useParams();
    // useState
        // question
    const [showQuestion, setShowQuestion] = useState(false);
    const [finsihAnswer, setFinishAnswer] = useState(false);
        // user state
    const [answerData, setAnswerData] = useState([]);
    const [finalResult, setFinalResult] = useState([]);
    const [userTotalMark, setUserTotalMark] = useState(0);
    // redux
    const { loading } = useSelector((state) => state.apiQueryAndMutation);
    const dispatch = useDispatch();
    // api
    const [ getQuestion, {data: questions} ] = useLazyQuery(GET_QUESTION);
    const [ getTestName, {data: testName}] = useLazyQuery(TEST_NAME_BY_ID);

    // Start UseEffect
    // api for question
    useEffect(() => {
        const fetchData = async () => {
            try{
                if(type && id){
                    dispatch(getDataStart());
                    await getQuestion({ variables: { testId: id }})
                    await getTestName({ variables: { id }})
                }else{
                    // console.log("quiz " + level)

                }

            }catch(e) {
                dispatch(getDataFailure(e.message))
            }
        }

        fetchData();
    }, [dispatch, getQuestion, id]);

    // if get "vocabluary" "grammar" "kanji" data
    useEffect(() => {
        if(questions){
            dispatch(getQuestionData(questions.question))
        }
    },[ dispatch, questions, testName])
    // End UseEffect

    // Start Function
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
            let point = 0;
            questions.question.forEach((question, index) => {
                data.push({
                    ...question,
                    userAnswer: answerData[index]
                })

                // if correct answer, user get point
                if(question.answers[0].answer_text === answerData[index]){
                    point++;
                }
            })

            setUserTotalMark(point);
            setFinalResult(data);
            setFinishAnswer(true);
        }else{
            setFinishAnswer(false);
        }
    }
    // End Function

    return(
        <div className="h-screen grid grid-cols-10">
            <TestSideBar level={level}/>

            {
                !loading &&
                    <div className="col-span-10 md:col-span-8 px-1 md:px-10 overflow-y-auto pt-24 pb-10">
                        {/*Start Nav*/}
                        <div className="mb-5">
                            <p className="text-lg font-bold">
                                <span className="cursor-pointer hover:underline hover:text-primary"
                                      onClick={() => navigate("/")}>Home</span> &gt; {level.toUpperCase()}  &gt; <span
                                className="text-primary">{type ? type.charAt(0).toUpperCase() + type.slice(1) : "Quiz"}</span>
                            </p>
                        </div>
                        {/*End Nav*/}

                        {/*Start Question Title*/}
                        {
                            ( !showQuestion && questions?.question.length > 0 ) &&
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
                                        <p className="font-bold text-lg text-center bg-border_color bg-opacity-20 border border-border_color rounded-md py-2 mb-5">Result
                                            = {userTotalMark} / {testName.test_name_by_pk.total_mark}</p>
                                        {
                                            finalResult.map(result => (
                                                <DetailQuestion key={result.id} data={result}/>
                                            ))
                                        }
                                    </>
                                    :
                                    <>
                                        {
                                            questions?.question.length > 0 ?
                                                <>
                                                    {
                                                        questions.question.map((question, index) => (
                                                            <div key={question.id}
                                                                 className={`${showQuestion ? "blur-0" : "blur-sm"} bg-gray-100 border border-primary p-2 md:p-4 rounded mb-3`}>
                                                                <Question data={question} showQuestion={showQuestion}
                                                                          id={index}
                                                                          customFun={answerHandler}/>
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

                                                :
                                                <p>Coming Soon ....</p>
                                        }
                                    </>

                            }


                        </div>
                        {/*End Question Title*/}

                    </div>
            }
        </div>
    )
};

export default QuestionPage