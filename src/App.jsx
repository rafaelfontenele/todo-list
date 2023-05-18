import './styles.css'
import { Header } from './Header';
import { Dashboard } from './Dashboard';
import { useState } from 'react';
import { ProjectForm } from './ProjectForm';
import { startKeyPressListener } from './utils/keyPress';



function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showPForm, setShowPForm] = useState(true);
  

  const [projects, setProjects] = useState({
    'Cozinha': {1: ['Descongelar freezer', 2000, 0],
                 2: ['Lavar louça',2500, 0]},
    'Casa': {3: ['Mudar lampadas', 2000, 0],
                 4:['Limpar casa',2500, 0]},
    'Comida': {5: ['Comprar arroz', 2000, 0],
                 6:['Fritar carne',2500, 0]},
    'Trabalho': {7: ['Estudar React', 2000, 0],
                8: ['Fazer landing page',2500, 0]},
    'Project10': {9: ['Descongelar freezer', 2000, 0],
                 2: ['Lavar louça',2500, 0]},
    'Project11': {3: ['Mudar lampadas', 2000, 0],
                 4:['Limpar casa',2500, 0]},
    'Project12': {5: ['Comprar arroz', 2000, 0],
                 6:['Fritar carne',2500, 0]},
                
  })
  const [currentProject, setCurrentProject] = useState('Cozinha');

  const handleKeyPress = (e) => {
    const keyPressed = (e.key == ' ') ? 'Space' : e.key;
    
    if (keyPressed == 'Escape') {
      if (showPForm) {
        setShowPForm(false);
        return
      }
      if (showDashboard) {
        setShowDashboard(false);
      }
    }


  }

  startKeyPressListener( handleKeyPress )

  return (
    <>    
     
    <Header isDashVisible={showDashboard} toggleDashboard={() => setShowDashboard( prev => !prev)}/>
    <Dashboard projects={projects} isVisible={showDashboard} 
    setCurrentProject={setCurrentProject} currentProject={currentProject}
     showProjectForm={showPForm} setShowProjectForm={setShowPForm}/>


    <ProjectForm setShowPForm={setShowPForm} showPForm={showPForm} />

    </>
  )
}

export default App
