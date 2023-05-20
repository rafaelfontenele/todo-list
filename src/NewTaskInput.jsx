import { useState } from 'react';

export const NewTaskInput = ( props ) => {
    const [newTask, setNewTask] = useState({'name': '', 'dueDate': ''})

    const handleNewTaskSubmit = () => {
        
        console.log('submit');
        console.log(newTask);


    }

    const x = (e) => {
        const value = e.target.value;

        setNewTask( prev => ({
            ...prev,
            name: value
        }));
    }

   
    return (
        
        <div className="new-task-input">
            <label htmlFor="taskName">Task name:
                <input type="text" value={newTask.name} id='taskName' onChange={(e) => x(e)}/>
            </label>

            <label htmlFor="taskDueDate">Date: 
                <input type="date" id='taskDueDate'/>
            </label>

            <button className='task-submit-btn' onClick={() => handleNewTaskSubmit()}>Create task</button>


        </div>

    )
}