import { Task } from "./Task"

export  const TaskList = ({taskList}) => {

   const tasks = taskList.map(((task,index) =>  <Task key={index} title={task[0]} date={task[1]} description={task[2]} />));

 return (
    <>
      <div className="w-full h-full bg-slate-200 flex flex-col gap-2 p-5 rounded-xl">
         {tasks}
      </div>
    </>
 )
}
