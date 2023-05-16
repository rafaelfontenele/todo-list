import './styles.css'
import { Header } from './Header';
import { Dashboard } from './Dashboard';
import { useState } from 'react';



function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);


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
    'Project13': {7: ['Estudar React', 2000, 0],
                8: ['Fazer landing page',2500, 0]},
    'Project14': {1: ['Descongelar freezer', 2000, 0],
                 2: ['Lavar louça',2500, 0]},
    'Project15': {3: ['Mudar lampadas', 2000, 0],
                 4:['Limpar casa',2500, 0]},
    'Project16': {5: ['Comprar arroz', 2000, 0],
                 6:['Fritar carne',2500, 0]},
    'Project17': {7: ['Estudar React', 2000, 0],
                8: ['Fazer landing page',2500, 0]},
    'Project18': {1: ['Descongelar freezer', 2000, 0],
                 2: ['Lavar louça',2500, 0]},
    'Project19': {3: ['Mudar lampadas', 2000, 0],
                 4:['Limpar casa',2500, 0]},
    'Project20': {5: ['Comprar arroz', 2000, 0],
                 6:['Fritar carne',2500, 0]},
    'Project21': {7: ['Estudar React', 2000, 0],
                8: ['Fazer landing page',2500, 0]},
    'Project22': {1: ['Descongelar freezer', 2000, 0],
                 2: ['Lavar louça',2500, 0]},
    'Project23': {3: ['Mudar lampadas', 2000, 0],
                 4:['Limpar casa',2500, 0]},
    'Project24': {5: ['Comprar arroz', 2000, 0],
                 6:['Fritar carne',2500, 0]},
    'Project25': {7: ['Estudar React', 2000, 0],
                8: ['Fazer landing page',2500, 0]},
                
  })
  const [currentProject, setCurrentProject] = useState('Cozinha');



  return (
    <>    
     
    <Header isDashVisible={showDashboard} toggleDashboard={() => setShowDashboard( prev => !prev)}/>
    <Dashboard projects={projects} isVisible={showDashboard} 
    setCurrentProject={setCurrentProject} currentProject={currentProject}
     setShowProjectForm={setShowProjectForm}/>


    {showProjectForm && <ProjectForm setShowProjectForm={setShowProjectForm} />}


    </>
  )
}

export default App
