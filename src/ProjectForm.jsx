import { useState, useEffect } from 'react';
import { Icon } from './Icon';
import { v4 as randomID } from 'uuid';

export const ProjectForm = (props) => {
    const [newProjectName , setnewProjectName] = useState('aaaa');
    const [newProjectIcon, setnewProjectIcon] = useState('house');

    const isActive = (props.showPForm) ? 'active' : 'inactive';
    const blackoutClasses = `blackout ${isActive}`;
    const formClasses = `project-form ${isActive}`;

    
    const closeForm = (e) => {
        if (e) e.stopPropagation();
        props.setShowPForm();
        setTimeout( () => setnewProjectIcon( (prev) => 'house'), 500);
        setTimeout( () => setnewProjectName( (prev) => ''), 500);

    }
    const handleIconClick = (e) => {
        const iconPath = e.target.currentSrc;
        const iconName=  iconPath.substring(iconPath.lastIndexOf('/')+1, iconPath.lastIndexOf('.'));
        
        setnewProjectIcon( (prev) => iconName);
    }
 
    const handleNewProjectSubmit = () => {
        if (newProjectIcon == '' || newProjectName == '') {
            return
        }

        const newProject = {
            name: newProjectName,
            id: randomID(),
            iconName: newProjectIcon,
            tasks: []
        }
        props.addProject(newProject);
        
        
        closeForm();

    }

    const iconNames = [
        'house',
        'heart',
        'star',
        'bolt',
        'cloud',
        'comment',
        'gear',
    ]

    const submitButtonClasses = `submit-btn ${(newProjectIcon && newProjectName) ? 'active' : null}`

    return (
        <>
        
        <div className={blackoutClasses} onClick={(e) => closeForm(e)}></div>
        <div className={formClasses}>


            <h1>New project:</h1>

            <div className="inputWrapper">

                <label htmlFor="projectName" >Project Name
                <input type="text" id='projectName' maxLength={11} value={newProjectName} onChange={(e) => setnewProjectName( (prev) => (e.target.value))}/>
                </label>

            </div>

            <div className="newForm-icon-wrapper">

            {iconNames.map( (iconName, index) => {
                const classes = `newProjectIcon-selector ${iconName == newProjectIcon ? 'checked' : ''}`
                return <span key={index}><Icon iconName={iconName} className={classes} onClick={handleIconClick} /></span>

            })}


            </div>

            <button className={submitButtonClasses} onClick={() => handleNewProjectSubmit()}>Create Project</button>




        </div>
        
        </>

    )


}