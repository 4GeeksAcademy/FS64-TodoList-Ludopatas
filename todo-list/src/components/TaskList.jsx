import { Task } from "./Task";

export const TaskList = ({ taskList, searchTerm, setTaskList }) => {


  

  const tasks = taskList.filter(task => {
    const title = task[0].toLowerCase();
    
    const description = task[2].toLowerCase();
    
    searchTerm = searchTerm.toLowerCase();
    
    return title.includes(searchTerm) || description.includes(searchTerm);
  }).map((task, index) => (
    <Task key={index} id={index} title={task[0]} date={task[1]} description={task[2]} setTaskList={setTaskList} />
  ));


  return (

    <div className="w-full h-full bg-slate-200 flex flex-col gap-2 p-5 rounded-xl">
      {tasks.length > 0 ? tasks : (
       <div className="w-full h-10 flex justify-between items-center px-5 py-10 bg-white rounded-xl">
       <div>
           <h1 className="font-semibold">No se han encontrado tareas :(</h1>
       </div>
       
   </div>
      ) }
    </div>
  );
};

