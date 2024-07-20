import TestSideBar from "../components/test/TestSideBar.jsx";
import {useNavigate, useParams} from "react-router-dom";
import TestLists from "../components/test/TestLists.jsx";
import {useLazyQuery} from "@apollo/client";
import {TEST_NAME_BY_TYPE_AND_LEVEL} from "../graphql/query/TestName.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    getDataFailure,
    getDataStart, getTestData
} from "../redux/QuerySlice.jsx";

const TestPage = () => {
    const { level, type } = useParams();
    const navigate = useNavigate();
    // redux
    const { testDatas, loading } = useSelector((state) => state.apiQueryAndMutation);
    const dispatch = useDispatch();
    // api
    const [ getTestName, { data } ] = useLazyQuery(TEST_NAME_BY_TYPE_AND_LEVEL);

    // Start UseEffect
    useEffect(() => {
        const fetchData = async() => {
            dispatch(getDataStart());

            try{
                await getTestName({ variables: { level: level.toUpperCase(), type: type.toLowerCase() }});
            }catch (e) {
                dispatch(getDataFailure(e.message))
            }
        }
        fetchData();

    }, [dispatch, getTestName, level, type]);

    useEffect(() => {
        if(data){
            dispatch(getTestData(data.test_name));
        }
    }, [dispatch, data])
    // End UseEffect

    // Start Function
    const cardButtonHandler = (id) => {
        navigate(`/test/${level}/${type}/${id}`);
    }
    // End Function



    return(
        <div className="h-screen grid grid-cols-10">
            <TestSideBar level={level}/>

            {
                !loading &&
                    <TestLists datas={testDatas} cardButtonHandler={cardButtonHandler}/>
            }
        </div>
    )
};

export default TestPage;