



export const ProjectForm = (props) => {
    const isActive = (props.showPForm) ? 'active' : 'inactive';
    const blackoutClasses = `blackout ${isActive}`;
    const formClasses = `project-form ${isActive}`;

    const closeForm = (e) => {
        console.log('closeform');
        e.stopPropagation();
        props.setShowPForm();

    }

    const handleEsc = (e) => {
        console.log(e);
        if (e.keycode == 27) {
            console.log('esc pressed');
        }
    }

    return (
        <>
        
        <div className={blackoutClasses} onClick={(e) => closeForm(e)}></div>
        <div className={formClasses}  onKeyDown={(e) => console.log(e)}>


            <h1>New project:</h1>


        </div>
        
        </>

    )


}