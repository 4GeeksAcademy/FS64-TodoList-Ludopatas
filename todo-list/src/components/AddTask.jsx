import { useState } from "react";

export const AddTask = ({editTaskList}) => {
    const [taskTitle, setTaskTitle]= useState("")
    const [taskDate, setTaskDate]= useState("")
    const [taskDescription, setTaskDescription]= useState("")
    const [isTaskCreated, setIsTaskCreated]= useState(false)

    const createTask = () =>{


        editTaskList([taskTitle, taskDate, taskDescription])
        setTaskTitle("")
        setTaskDate("")
        setTaskDescription("")
        setIsTaskCreated(true)
        

    }

    return (
        <>
        <div className=" w-2/5 bg-slate-200 rounded-xl p-5">
            <div className="pb-5 w-full flex justify-center items-center">
           <h1 className="text-2xl font-bold">Task List</h1>
           </div>
           <div className="py-3 w-full flex justify-between items-center">
          <input className="px-2 py-1 rounded-xl" type="text" name="" id=""  onChange={e => setTaskTitle(e.target.value)} value={taskTitle} />
          <input className="px-2 py-1 rounded-xl" type="date" name="" id=""  onChange={e => setTaskDate(e.target.value)} value={taskDate} />
           </div>
           <div className=" pt-5 w-full flex justify-center items-center">
          <textarea className="w-full px-2 py-1 rounded-xl" name="" id="" cols="" rows="7"  onChange={e => setTaskDescription(e.target.value)} value={taskDescription}></textarea>
           </div>
           {isTaskCreated && (
            <>
            <div className="w-full pt-5 flex justify-center items-center">
               <p className="font-semibold text-green-600">La tarea se ha creado con éxito </p> 
            </div>
            </>
            )}

           <div className="w-full pt-5 flex justify-center items-center ">
           <button className="button__addtask px-6 py-3 bg-blue-900 text-white rounded-xl font-semibold" onClick={createTask}>Add task</button>
           </div>
           

        </div>
        </>

    );
    
}