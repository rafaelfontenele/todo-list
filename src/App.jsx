import './styles.css'
import { Header } from './Header';
import { Dashboard } from './Dashboard';
import { useState } from 'react';
import { ProjectForm } from './ProjectForm';
import { startKeyPressListener } from './utils/keyPress';
import { v4 as randomID } from 'uuid';



function App() {
  const [showDashboard, setShowDashboard] = useState(1);
  const [showPForm, setShowPForm] = useState(false);



  const [projects, setProjects] = useState([

    {
      name: '1Cozinha',
      id: randomID(),
      iconName: 'star',
      tasks: [
        ['cook dinner', 'make sandwich', 'clean dishes', 'clean oven', 'buy groceries']
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

  const [currentProject, setCurrentProject] = useState('Lala');
  const validKeys = ['Escape'];

  
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

  const addProject = (project) => {
    ///
  }


  return (
    <>    
     
    <Header isDashVisible={showDashboard} toggleDashboard={() => setShowDashboard( prev => !prev)}/>
    <Dashboard projects={projects} setProjects={setProjects} isVisible={showDashboard} 
    setCurrentProject={setCurrentProject} currentProject={currentProject}
     showProjectForm={showPForm} setShowProjectForm={setShowPForm}
     deleteProject={deleteProject} />


    <ProjectForm setShowPForm={setShowPForm} showPForm={showPForm} />

    </>
  )
}

export default App
