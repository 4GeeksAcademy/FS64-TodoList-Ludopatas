import { Task } from "./Task";

export const TaskList = ({ taskList }) => {
  const filteredTasks = taskList.filter(task => {
    const title = task[0].toLowerCase();
    const description = task[2].toLowerCase(); 
    const searchTerm = ''
    searchTerm.toLowerCase(); 
    return title.includes(searchTerm) || description.includes(searchTerm);
  });
  const tasks = filteredTasks.map((task, index) => (
    <Task key={index} id={index} title={task[0]} date={task[1]} description={task[2]} />
  ));

  return (
    <div className="w-full h-full bg-slate-200 flex flex-col gap-2 p-5 rounded-xl">
      {tasks}
    </div>
  );
};

