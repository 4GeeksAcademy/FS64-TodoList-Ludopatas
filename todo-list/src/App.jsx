import { TaskList } from './components/TaskList'
import { useState } from 'react'
import { AddTask } from './components/AddTask'
import './App.css'

function App() {
  
  const [taskList, setTaskList] = useState([]);
  const [searchTerm,setSearchTerm] = useState('')
  const [isCreateTaskVisible,setIsCreateTaskVisible] = useState(false);

  const closeAddTaskPopup = () => {

    setIsCreateTaskVisible(false);
  }

  const showAddTaskPopup = () => {

    setIsCreateTaskVisible(true);
  }

  const deleteTask = (id) => {

    setTaskList(taskList.splice(id,1))

  }

  const editTaskList = (newTask) => {

      setTaskList([...taskList, newTask])
      
  }

  return (
    <>
  <div className='w-screen h-screen bg-white flex justify-center items-center'>
    <div className="todo__container w-2/3  bg-slate-100 p-10 rounded-xl flex flex-col">
      <div className="flex w-full justify-between items-center">
        <button className="button__addtask px-5 py-4 bg-blue-900 text-white rounded-xl" onClick={showAddTaskPopup}>Add task</button>
        <input className="px-2 py-1 rounded-xl" type="text" name="" id="" onChange={e => setSearchTerm(e.target.value)} value={searchTerm} placeholder='Search...' />
      </div>
      <div className='w-full h-full mt-2'>
       {taskList.length > 0 && <TaskList taskList={taskList} searchTerm={searchTerm} setTaskList={setTaskList} />}
      </div>
      </div>
      
      {isCreateTaskVisible && <AddTask editTaskList={editTaskList} id={taskList.length} closeAddTaskPopup={closeAddTaskPopup} />}
    
      

      
    </div>

    </>
  )
}

export default App
