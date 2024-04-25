export const AddTask = ({editTaskList}) => {

    const handleClick = (newTask) =>{

        editTaskList(newTask);
    }

    return (
        <>
        <button onClick={() => {handleClick(0)}}>Editar Tareas</button>
        </>

    );
    
}