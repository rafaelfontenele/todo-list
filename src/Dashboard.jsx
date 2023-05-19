import { useState, useEffect } from 'react';
import { Icon } from './Icon';


export const Dashboard = ( {projects, setProjects, isVisible, 
    setCurrentProject, currentProject, showProjectForm, setShowProjectForm, deleteProject} ) => {
    
    const [deleteClicked, setDeleteClicked] = useState([]);

    const classes = `dashboard ${isVisible ? 'visible' : 'hidden'}`;
    
    const handleDeleteClick = (event, projectClicked) => {
        event.stopPropagation();

        if (deleteClicked.includes(projectClicked)) {

            setProjects(projects.filter( p => p.id !== projectClicked.id));
            return
            
        }

        setDeleteClicked(prev => [projectClicked, ...prev]); 
        
    }



     useEffect( () => {

        const timer = setTimeout( () => {
            setDeleteClicked(deleteClicked.slice(1));
        }, 1500)

        return () => { clearTimeout(timer);}

    }, [deleteClicked])



    return (
    <>


        {isVisible && <div className={classes}>
            
        <div className="dashboard-top">Projects</div>

        <div className="dashboard-p-list">
            
            {projects.map( (project) => {
                const classes = `project-btn ${isVisible ? "visible" : ""} ${(currentProject == project) ? " checked" : ""}`
                const iconSrc = `src/assets/${project.iconName}.svg`
                const firstClickedDelete = deleteClicked.includes(project);
                const deleteIconClasses = `delete-p-btn ${firstClickedDelete ? 'second-click' : null}`;
                const style = { 
                    backgroundColor: `${firstClickedDelete ? 'rgba(255,0,0,0.6)' : ''}` 
                };

            return (

                <div className={classes} style={style} onClick={() => setCurrentProject(project)}  key={project.id}>
                    


                    <Icon iconName={firstClickedDelete ? 'xIcon' : 'trash-can'} onClick={(e) => handleDeleteClick(e, project)} className={deleteIconClasses}
                     
                    />

                    <img src={iconSrc} alt='' />

                    {project.name}
                    
                    </div>
                    
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