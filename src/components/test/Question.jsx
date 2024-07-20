const Question = ({ data, id, customFun }) => {
    return(
        <>
            <div className="flex items-start md:items-center ">
                <p className="inline-flex w-8 h-8 border-2 border-gray-500 font-bold shadow-2xl rounded-md  justify-center items-center mr-2 md:mr-5">{data.id}</p>
                <p className="font-bold inline-block">{data.question_text}</p>
            </div>

            {
                data.multiple_choice.map((ans, index) => (
                    <div className="flex items-center my-4 ml-7 md:ml-10" key={index}>
                        <input id={`${data.id}${index}`} type="radio" value={ans} name={data.id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={() => customFun(id, ans)}/>
                        <label htmlFor={`${data.id}${index}`} className="ms-2 text-sm font-medium cursor-pointer">{ans}</label>
                    </div>
                ))
            }
        </>
    )
};

export default Question