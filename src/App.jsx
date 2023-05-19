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
      tasks: [
        ['cook dinner', 'make sandwich', 'clean dishes', 'clean oven', 'buy groceries']
      ]
    },

    {
      name: '3Cozinha',
      id: randomID(),
      iconName: 'star',
      tasks: [
        ['cook dinner', 'make sandwich', 'clean dishes', 'clean oven', 'buy groceries']
      ]
    },

    {
      name: '4Cozinha',
      id: randomID(),
      iconName: 'star',
      tasks: [
        ['cook dinner', 'make sandwich', 'clean dishes', 'clean oven', 'buy groceries']
      ]
    },

    {
      name: '5Cozinha',
      id: randomID(),
      iconName: 'star',
      tasks: [
        ['cook dinner', 'make sandwich', 'clean dishes', 'clean oven', 'buy groceries']
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
 
 
  const deleteProject = (deleteItem) => {

    setProjects(projects.filter(p => p.id !== deleteItem.id))

}

  const addProject = (newProject) => {
    
    setProjects([...projects, newProject])

  }


  return (
    <>    
     
    <Header isDashVisible={showDashboard} toggleDashboard={() => setShowDashboard( prev => !prev)}/>
    <Dashboard projects={projects} setProjects={setProjects} isVisible={showDashboard} 
    setCurrentProject={setCurrentProject} currentProject={currentProject}
     showProjectForm={showPForm} setShowProjectForm={setShowPForm}
     deleteProject={deleteProject} />


    <ProjectForm projects={projects} setShowPForm={setShowPForm} showPForm={showPForm} addProject={addProject} />

    <MainDisplay currentProject={currentProject} showDashboard={showDashboard} />

    </>
  )
}

export default App
