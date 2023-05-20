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

      
    },

    {
      name: '3Cozinha',
      id: randomID(),
      iconName: 'star',
      tasks: 
      [
        {name: 'cook di33333nner',
          dueDate: '23/05/2023',
          completed: false,
          id: randomID()},

        {name: 'Do somet333hing else',
          dueDate: '23/05/2023',
          completed: false,
          id: randomID()},

        {name: 'whate33333ver',
          dueDate: '23/05/2023',
          completed: false,
          id: randomID()},

        {name: 'random3333Name()',
          dueDate: '23/05/2023',
          completed: false,
          id: randomID()},
        ]      
    },

    {
      name: '4Cozinha',
      id: randomID(),
      iconName: 'star',
      tasks: 
      [
        {name: 'cook 4444',
          dueDate: '23/05/2023',
          completed: false,
          id: randomID()},

        {name: 'Do 4444 else',
          dueDate: '23/05/2023',
          completed: false,
          id: randomID()},

        {name: '4444444',
          dueDate: '23/05/2023',
          completed: false,
          id: randomID()},

        {name: '444()',
          dueDate: '23/05/2023',
          completed: false,
          id: randomID()},
        ]      
    },

    {
      name: '5Cozinha',
      id: randomID(),
      iconName: 'star',
      tasks: 
      [
        {name: 'cook dinne5555r',
          dueDate: '23/05/2023',
          completed: false,
          id: randomID()},

        {name: 'Do some55555thing else',
          dueDate: '23/05/2023',
          completed: false,
          id: randomID()},

        {name: 'whate55555ver',
          dueDate: '23/05/2023',
          completed: false,
          id: randomID()},

        {name: 'randomN5555ame()',
          dueDate: '23/05/2023',
          completed: false,
          id: randomID()},
        ]      
    }
  ])
  const [currentProject, setCurrentProject] = useState(projects[0]);

  
  
  const handleKeyPress = (e) => {
    const keyPressed = (e.key)
    if (e.repeat) return;
        
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
  const addTask = (newTask, projectId) => {
    _changedProject = projects.filter(project => project.id === projectId);
    _changedProject.tasks = [..._changedProject.tasks, newTask];
    setProjects( [...projects.filter( p => p.id !== projectId), _changedProject] )

  }

  const removeTask = (taskId) => {
    const _projects = projects;
    _projects.map( project => {
           project.tasks = project.tasks.filter( item => item.id !== taskId);
    })
    setProjects([..._projects]);
  }


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
