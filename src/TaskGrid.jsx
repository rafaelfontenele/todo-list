import { Task } from './Task';


export const TaskGrid = ( props ) => {

    const taskList = props.currentProject.tasks;
    
    return (

        <div className="task-grid">

        {taskList.map( task => {
            return (<Task task={ task } />)
        })}


        </div>

    )


}