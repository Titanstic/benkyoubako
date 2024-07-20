import {NavLink} from "react-router-dom";
const questionType = [
    {
        type: "Quiz",
    },
    {
        type: "Vocabulary",
    },
    {
        type: "Grammar",
    },
    {
        type: "Kanji",
    },
];

const activeLink = "block text-primary text-xl font-bold underline decoration-2 underline-offset-4 mb-4";
const normalLink = "block  text-xl font-bold mb-4 hover:text-primary hover:underline hover:decoration-2 hover:underline-offset-4";

const TestSideBar = ({ level }) => {
    return (
        <div className="hidden md:flex md:justify-center md:items-start md:col-span-2 bg-[#D9D9D9] shadow pt-24">
            <div className="w-1/2">
                <p className="text-xl font-bold uppercase mb-5">JLPT {level}</p>

                {
                    questionType.map(q => (
                        <NavLink to={`/test/${level}/${q.type.toLowerCase()}`} key={q.type} className={({isActive}) => (isActive ? activeLink : normalLink)}>{ q.type }</NavLink>
                    ))
                }
            </div>

        </div>

    )
};

export default TestSideBar;