import { TaskGrid } from './TaskGrid';
import { NewTaskInput } from './NewTaskInput';

export const MainDisplay = ( props ) => {
    
    const dashIsOpen = props.showDashboard;
    const style = dashIsOpen ? { width: '80vw', marginLeft: '20vw' } : { width: '100vw' };
    const projectIsSelected = props.currentProject;

    return  (
    
        <div className="main-wrapper" style={ style }>
        
        {!projectIsSelected && (
            <div className="no-project-main-display">No projects to display</div>
        )}

        

        {projectIsSelected && <div className='task-grid-title'> {props.currentProject.name}'s tasks </div>}
        {projectIsSelected && <NewTaskInput currentProject={props.currentProject}  addTask={props.addTask} />}
        {projectIsSelected && <TaskGrid currentProject={props.currentProject} removeTask={props.removeTask}/>}
        


        </div>
        
    )
}