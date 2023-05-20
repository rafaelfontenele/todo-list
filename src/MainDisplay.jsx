import { TaskGrid } from './TaskGrid';
import { NewTaskInput } from './NewTaskInput';

export const MainDisplay = ( props ) => {
    
    const dashIsOpen = props.showDashboard;
    const style = dashIsOpen ? { width: '80vw', marginLeft: '20vw' } : { width: '100vw' };


    return (
        
        <div className="main-wrapper" style={ style }>

        <NewTaskInput currentProject={props.currentProject}  addTask={props.addTask} />

        <TaskGrid currentProject={props.currentProject} removeTask={props.removeTask}/>
        
        </div>
        
    )
}