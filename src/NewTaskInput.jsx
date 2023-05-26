import { useState } from 'react';

export const NewTaskInput = ( props ) => {


    const [newTask, setNewTask] = useState({name: '', dueDate: new Date() })
    const [invalidTask, setInvalidTask] = useState(false);
    
    const handleNewTaskSubmit = () => {
        if (!newTask.name || !newTask.dueDate) { console.log('invalid new task'); setInvalidTask(true); return}
        setInvalidTask(false);


        props.addTask(newTask, props.currentProject.id);

        setNewTask({name: '', dueDate: new Date() });

    }

    const changeNewTask = ( selector, value ) => {
        if (!Object.keys(newTask).includes(selector)) return

        if (selector === 'dueDate') {
            const inputDate = value.split('-');
            const [ newYear, newMonth, newDay ] = [...inputDate];
            const newDateString = `${newYear}-${('0' + newMonth).slice(-2)}-${('0' + newDay).slice(-2)}`            //YEAR-MONTH-DAY
            const newDate = new Date(newDateString);

            setNewTask( prev => ({
                ...prev,
                [selector]: newDate        
            }))
           
            return
        }

        setNewTask( prev => ({
            ...prev,
            [selector]: value
        }))}
    
        const newTaskDateDisplay = () => {
            const date = newTask.dueDate;
            const day = ("0" + date.getUTCDate()).slice(-2);
            const month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
            const year = date.getFullYear() ;
            const formattedDate = `${year}-${month}-${day}`;
            return formattedDate;

        }

        const inputClasses = `new-task-input ${invalidTask ? 'invalid' : null}`
   
    return (
        
        <div className={inputClasses}>
            <label htmlFor="taskName">Task name:
                <input type="text"placeholder={'New Task'} value={newTask.name} maxLength={14} id='taskName' onChange={(e) => changeNewTask('name', e.target.value)}/>
            </label>

            <label htmlFor="taskDueDate">Date: 
                <input type="date" value={newTaskDateDisplay()} id='taskDueDate' onChange={(e) => {changeNewTask('dueDate', e.target.value)}}/>
            </label>

            <button className='task-submit-btn' onClick={() => handleNewTaskSubmit()}>Create task</button>


        </div>

    )
}