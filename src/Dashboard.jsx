

export const Dashboard = (props) => {
    

    const projects = props.projects;
    console.log(projects)

    return (
    <>


        <ol className="dashboard">
            
        {props.isShowing && Object.keys(projects).map( (key) => {
            return <li key={projects[item][3]}>{key}</li>
        })}




        </ol>

    </>
    )




}