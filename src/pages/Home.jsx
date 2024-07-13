import Welcome from "../components/home/Welcome.jsx";
import Level from "../components/home/Level.jsx";
import TestLists from "../components/home/TestLists.jsx";


const Home = () => {
    return(
        <div className="w-full">
            <Welcome/>

            <Level/>

            <TestLists/>
        </div>
)
};

export default Home;