import { useEffect , useState} from 'react';
import { motion } from "motion/react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./mainpage/main"
import MoreProjects from "./mainpage/moreProjects"
import ScrollToTop from './components/ux/scrollTop';
import SplashCursor from './assets/bg/aurora';

function App() {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "winter";
  });
  
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  
  
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.15 }}
    viewport={{ once: true, amount: 0.3 }}
    className="inter">
      <Router>
         <ScrollToTop/>
        
      {theme=="halloween" && <SplashCursor />}
        <Routes>
             <Route path="/" element={<Main theme={theme} setTheme={setTheme} />} />
          <Route path="/projects" element={<MoreProjects/>}/>
        </Routes>
      </Router>
    </motion.div>
  )
}

export default App
