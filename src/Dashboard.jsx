import { useState, useEffect } from 'react';
import { Icon } from './Icon';


export const Dashboard = ( {projects, isVisible, setCurrentProject, currentProject, setShowProjectForm} ) => {
    
    const classes = `dashboard ${isVisible ? 'visible' : 'hidden'}`



    return (
    <>


        {isVisible && <div className={classes}>
            
        <div className="dashboard-top">Projects</div>

        <div className="dashboard-p-list">
            
            {Object.keys(projects).map( (project) => {
            const key = crypto.randomUUID();
            const classes = `project-btn ${isVisible ? "visible" : ""} ${(currentProject == project) ? " checked" : ""}`

            return (

                <div className={classes} onClick={() => setCurrentProject(project)}  key={key}>{project}</div>

            )


        })}
        
        
        </div>
      
        <div>        
            <Icon iconName='plus' className='newFormPlus-btn' onClick={() => setShowProjectForm(true)}/>
        </div>


        </div>
      
        
        }

    </>
    )




}