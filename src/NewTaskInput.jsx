

export const NewTaskInput = ( props ) => {
    return (
        
        <div className="new-task-input">
            <label htmlFor="taskName">Task name:
                <input type="text" id='taskName'/>
            </label>

            <label htmlFor="taskCheck">Completed
                <input type="checkbox" id='taskCheck'/>
            </label>

            <label htmlFor="taskDueDate">Date: 
                <input type="date" id='taskDueDate'/>
            </label>

            <button className='task-submit-btn'>Create task</button>


        </div>

    )
}