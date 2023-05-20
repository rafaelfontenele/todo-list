import { Icon } from './Icon';
import { useState } from 'react';

export const TaskGrid = ( props ) => {
    const [checkedTasks, setCheckedTasks] = useState([]);
    const taskList = props.currentProject.tasks;
    
    const handleCheckmarkClick = (task, wasChecked) => {
        
        if (wasChecked) return;

        setCheckedTasks( prev => [...prev, task.id]);
        
        const timer = setTimeout(() => {
            props.removeTask(task.id, props.currentProject.id);
            clearTimeout(timer);
        }, 3000);

    }

    return (

        <div className="task-grid">
            <h1>{props.currentProject.name}</h1>
        {taskList.length == 0 && (
            <div className="empty-tasks">No tasks to display</div>
)}
        {taskList.map( task => {
            const wasChecked = checkedTasks.includes(task.id);
            const taskClasses = `task ${wasChecked ? 'checked' : null}`
            const checkmarkIconName = wasChecked ? 'square-checked' : 'square-empty';

            return (

                <div className={taskClasses} key={task.id}> {task.name} <Icon className={'checkmark'} iconName={checkmarkIconName} 
                onClick={() => handleCheckmarkClick(task, wasChecked)} /> </div>

            )
})}


        </div>

    )


}