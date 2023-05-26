import './styles.css'
import { Header } from './Header';
import { Dashboard } from './Dashboard';
import { useEffect, useState } from 'react';
import { ProjectForm } from './ProjectForm';
import { startKeyPressListener } from './utils/keyPress';
import { v4 as randomID } from 'uuid';
import { MainDisplay } from './MainDisplay';


function App() {
  const [showDashboard, setShowDashboard] = useState(false); 
  const [showPForm, setShowPForm] = useState(false); 
  const [projects, setProjects] = useState([
    {
      name: 'test',
      id: randomID(),
      iconName: 'star',
      tasks:   [
        {name: 'cook dinner',
        dueDate: '23/05/2023',
        completed: false,
        id: randomID()},
      ]},
    {
      name: '1Cozinha',
      id: randomID(),
      iconName: 'star',
      tasks:   [
          {name: 'cook dinner',
            dueDate: '23/05/2023',
            completed: false,
            id: randomID()},

          {name: 'Do something else',
            dueDate: '23/05/2023',
            completed: false,
            id: randomID()},

          {name: 'whatever',
            dueDate: '23/05/2023',
            completed: false,
            id: randomID()},

          {name: 'randomName()',
            dueDate: '23/05/2023',
            completed: false,
            id: randomID()},
            {name: 'cook dinner',
            dueDate: '23/05/2023',
            completed: false,
            id: randomID()},

          {name: 'Do something else',
            dueDate: '23/05/2023',
            completed: false,
            id: randomID()},

          {name: 'whatever',
            dueDate: '23/05/2023',
            completed: false,
            id: randomID()},

          {name: 'randomName()',
            dueDate: '23/05/2023',
            completed: false,
            id: randomID()},
            {name: 'cook dinner',
            dueDate: '23/05/2023',
            completed: false,
            id: randomID()},

          {name: 'Do something else',
            dueDate: '23/05/2023',
            completed: false,
            id: randomID()},

          {name: 'whatever',
            dueDate: '23/05/2023',
            completed: false,
            id: randomID()},

          {name: 'lastone()',
            dueDate: '23/05/2023',
            completed: false,
            id: randomID()},

  ]
},

    {
      name: '2Cozinha',
      id: randomID(),
      iconName: 'star',
      tasks: 
      [
        {name: 'cook di222nner',
          dueDate: '23/05/2023',
          completed: false,
          id: randomID()},

        {name: 'Do something222 else',
          dueDate: '23/05/2023',
          completed: false,
          id: randomID()},

        {name: 'whatev222er',
          dueDate: '23/05/2023',
          completed: false,
          id: randomID()},

        {name: 'randomN22ame()',
          dueDate: '23/05/2023',
          completed: false,
          id: randomID()},
        ]

      
    }
  ])

  const [currentProject, setCurrentProject] = useState(projects[0]);


  useEffect( () => {
    if (currentProject == null) {
      setShowDashboard( prev => true);
    }
  }, [currentProject])
  
  
  const handleKeyPress = (e) => {
    const keyPressed = (e.key)
    if (e.repeat) return;
    if (keyPressed == 'Enter') {
      
    }

    if (keyPressed == 'Escape') {
      if (showPForm) {
        setShowPForm(false);
        return
      }

      
      if (showDashboard) {
        setShowDashboard(false);
        return
      }
    }
  }

  startKeyPressListener( handleKeyPress )
 

  const deleteProject = (deleteProject) => {

    setProjects(projects.filter(p => p.id !== deleteProject.id))

    // if deleteProject == currentproject, updatecurrentProject
}

  const addProject = (newProject) => {
    
    setProjects([...projects, newProject])

  }
  const stringifyDate = (date) => {
    const day = ("0" + date.getUTCDate()).slice(-2);
    const month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;

}
  const addTask = (newTask, projectId) => {

    newTask = {name: newTask.name, dueDate: stringifyDate(newTask.dueDate), completed: false, id: randomID()}
    
    const _projects = projects;

    _projects.map( project => {
      if (project.id === projectId) {
        project.tasks.push(newTask);
        setProjects( prev => [..._projects]);
      }
    })
  }

  const removeTask = (taskId) => {
    const _projects = projects;
    /*
    _projects.map( project => {
           project.tasks = project.tasks.filter( item => item.id !== taskId);
    })
*/

    _projects.map( project => {
      project.tasks.map( task => {
        if (task.id == taskId) {
          project.tasks = project.tasks.filter( item => item.id !== taskId);
          setProjects(prev => [..._projects]);
        }
      })
    })
  }

  useEffect( () => {
    if (currentProject) {
      const currentId = currentProject.id;
    
    let flag = false;
    projects.filter( project => {
      if (project.id === currentId) {
        flag = true;
        setCurrentProject( prev => project)
      }
    })

    if (!flag) {
      setCurrentProject(projects[0]);
    }
  } else {
    setCurrentProject( prev => projects[0])
  } 


  }, [projects])




  return (
    <>    
     
    <Header isDashVisible={showDashboard} toggleDashboard={() => setShowDashboard( prev => !prev)}/>
    <Dashboard projects={projects} setProjects={setProjects} isVisible={showDashboard} 
    setCurrentProject={setCurrentProject} currentProject={currentProject}
     showProjectForm={showPForm} setShowProjectForm={setShowPForm}
     deleteProject={deleteProject} />


    <ProjectForm projects={projects} setShowPForm={setShowPForm} showPForm={showPForm} addProject={addProject} />

    <MainDisplay currentProject={currentProject} showDashboard={showDashboard} projects={projects} addProject={addProject} addTask={addTask} removeTask={removeTask}/>

    </>
  )
}

export default App
