import { useEffect , useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./mainpage/main"
import MoreProjects from "./mainpage/moreProjects"
import ScrollToTop from './components/ux/scrollTop';
// import Aurora from './assets/bg/aurora';
import SplashCursor from './assets/bg/aurora';

function App() {

  const [theme, setTheme] = useState(() => {
    // Get stored theme or default to 'winter'
    return localStorage.getItem("theme") || "winter";
  });
  
  // Sync theme with DaisyUI and localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  
  
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

  return (
    <div className='inter'>
      <Router>
         <ScrollToTop/>
        
      {theme=="halloween" && <SplashCursor />}
        <Routes>
             <Route path="/" element={<Main theme={theme} setTheme={setTheme} />} />
          <Route path="/projects" element={<MoreProjects/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
