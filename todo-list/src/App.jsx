import { TaskList } from './components/TaskList'
import { useState } from 'react'
import { FilterTask } from './components/FilterTask'
import { AddTask } from './components/AddTask'
import './App.css'

function App() {
  
  const [taskList, setTaskList] = useState([]);
  

  

  const updateTaskList = () => {


  }

  const editTaskList = (newTask) => {

      setTaskList([...taskList, newTask])
      
  }

  return (
    <>
  <div className='w-screen h-screen bg-white flex justify-center items-center'>
    <div className="todo__container w-2/3  bg-slate-100 p-10 rounded-xl flex flex-col">
      <div className="flex w-full justify-between items-center">
        <button className="button__addtask px-5 py-4 bg-blue-900 text-white rounded-xl">Add task</button>
        <FilterTask />
      </div>
      <div className='w-full h-full mt-2'>
       {taskList.length > 0 && <TaskList taskList={taskList} />}
      </div>
      </div>
      
      <AddTask editTaskList={editTaskList} id={taskList.length} />
    
      

      
    </div>

    </>
  )
}

export default App
