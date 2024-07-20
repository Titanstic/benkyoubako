import TestCard from "./TestCard.jsx";

const TestLists = ({ datas, cardButtonHandler }) => {
    return(
        <div className="col-span-10 md:col-span-8 px-1 md:px-10 overflow-y-auto pt-24 pb-10">
            <p className="text-xl font-bold tracking-wide">Which question you want to try?</p>

            <div className="grid grid-cols-6 gap-x-3 gap-y-6 mt-16">
                {
                    datas.length > 0 ?
                        datas.map((d) => (
                            <TestCard key={d.id} data={d} cardButtonHandler={cardButtonHandler}/>
                        ))
                        :
                        <p>Coming soon</p>
                }
            </div>
        </div>
    )
};

export default TestLists;