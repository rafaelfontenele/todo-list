import './styles.css'
import { Header } from './Header'
import { Dashboard } from './Dashboard'
import { useState, useEffect } from 'react';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [projects, setProjects] = useState({
    'project1': [['dishes1', 2000, 0, crypto.randomUUID()], ['cook food1',2500, 0]],
    'project2': [['dishes2', 2000, 0], ['cook food2',2500, 0]],
    'project3': [['dishes3', 2000, 0], ['cook food3',2500, 0]],
    'project4': [['dishes4', 2000, 0], ['cook food4',2500, 0]]
  })

  useEffect( () => {
    const dashBtn = document.querySelector('.dash-btn');
    
    if (showDashboard) {
      document.querySelector('.dashboard').classList.add('visible');
      dashBtn.style.opacity = '0.5';

      return
    }
    document.querySelector('.dashboard').classList.remove('visible');
    dashBtn.style.opacity = '1';


  }, [showDashboard])


  return (
    <>    
     
    <Header isDashVisible={showDashboard} toggleDashboard={() => setShowDashboard( prev => !prev)}/>
    <Dashboard projects={projects} isShowing={showDashboard}/>


    </>
  )
}

export default App
