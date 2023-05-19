export const TaskGrid = ( props ) => {

    const taskList = props.currentProject.tasks;
    
    return (

        <div className="task-grid">

        {taskList.map( task => {
            return (

                <div className="task" key={task.id}> {task.name} </div>

            )
})}


        </div>

    )


}