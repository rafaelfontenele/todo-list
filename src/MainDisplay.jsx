import { useState } from 'react';
import { TaskGrid } from './TaskGrid';
import { Task } from './Task';
import { NewTaskInput } from './NewTaskInput';

export const MainDisplay = ( props ) => {
    
    const dashIsOpen = props.showDashboard;
    const style = dashIsOpen ? { width: '80vw', marginLeft: '20vw' } : { width: '100vw' };


    return (
    <>
        
        <NewTaskInput currentProject={props.currentProject} />

        <TaskGrid currentProject={props.currentProject} />
        
        
    </>
    )
}