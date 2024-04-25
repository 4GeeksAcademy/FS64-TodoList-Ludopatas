export const Task = ({title,date,description,id,deleteTask}) => {


    const handleDelete = () => {

        deleteTask(id);

    } 

    return <>
        <div className="w-full h-10 flex justify-between items-center px-5 py-10 bg-white rounded-xl">
            <div>
                <h1 className="font-semibold">{title}</h1>
                <p>{date}</p>
            </div>

            <p>{description.length > 50 ? description.slice(0,50) + '...' : description}</p>
            <div className="flex gap-2">
                <button className="px-2 py-1 bg-slate-200 rounded-xl"><i className="fa-solid fa-pen-to-square hover:text-yellow-500"></i></button>
                <button className="px-2 py-1 bg-slate-200 rounded-xl"><i className="fa-solid fa-trash hover:text-red-500"></i></button>
            </div>
            
        </div>
    </>
}