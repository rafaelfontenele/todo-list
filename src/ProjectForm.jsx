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

    const handleSubmit = () => {
        alert(newProjectName);

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
        <div className={formClasses}  onKeyDown={(e) => console.log(e)}>


            <h1>New project:</h1>

            <div className="inputWrapper">

                <label htmlFor="projectName" >Project Name:
                <input type="text" id='projectName' value={newProjectName} onChange={(e) => setnewProjectName( (prev) => (e.target.value))}/>
                </label>

            </div>

            <div className="newForm-icon-wrapper">

            {iconNames.map( iconName => {
                return <Icon iconName={iconName} className='newProjectIcon-selector' onClick={handleIconClick}/>

            })}


            </div>

            <button onClick={() => handleSubmit()}>Create Project</button>




        </div>
        
        </>

    )


}