import { useState } from 'react';
import { Icon } from './Icon';


export const ProjectForm = (props) => {
    const [newProjectName , setnewProjectName] = useState('');
    const [newProjectIcon, setnewProjectIcon] = useState('star');

    const isActive = (props.showPForm) ? 'active' : 'inactive';
    const blackoutClasses = `blackout ${isActive}`;
    const formClasses = `project-form ${isActive}`;

    const closeForm = (e) => {
        e.stopPropagation();
        props.setShowPForm();

    }
    const handleIconClick = (e) => {
        const iconPath = e.target.currentSrc;
        const iconName=  iconPath.substring(iconPath.lastIndexOf('/')+1, iconPath.lastIndexOf('.'));
        
        setnewProjectIcon( (prev) => iconName);
    }

    const handleNewProjectSubmit = () => {
        if (newProjectIcon == '' || newProjectName == '') {
            console.log('Empty ERROR');
            return
        }

        console.log('valid');

        setnewProjectIcon( (prev) => '')
        setnewProjectName( (prev) => '')
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


    return (
        <>
        
        <div className={blackoutClasses} onClick={(e) => closeForm(e)}></div>
        <div className={formClasses}>


            <h1>New project:</h1>

            <div className="inputWrapper">

                <label htmlFor="projectName" >Project Name:
                <input type="text" id='projectName' value={newProjectName} onChange={(e) => setnewProjectName( (prev) => (e.target.value))}/>
                </label>

            </div>

            <div className="newForm-icon-wrapper">

            {iconNames.map( (iconName, index) => {
                const classes = `newProjectIcon-selector ${iconName == newProjectIcon ? 'checked' : ''}`
                return <span key={index}><Icon iconName={iconName} className={classes} onClick={handleIconClick} /></span>

            })}


            </div>

            <button onClick={() => handleNewProjectSubmit()}>Create Project</button>




        </div>
        
        </>

    )


}