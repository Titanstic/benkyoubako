import Welcome from "../components/home/Welcome.jsx";
import Level from "../components/home/Level.jsx";
import TestLists from "../components/home/TestLists.jsx";

import {useNavigate} from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    // api call

    // start function
    const testHandler = (type) => {
        navigate(`/test/${type}`)
    }
    // end function

    return(
        <div className="w-full overflow-x-hidden">
            <Welcome/>

            <Level/>

            <TestLists testHandler={testHandler}/>
        </div>
)
};

export default Home;