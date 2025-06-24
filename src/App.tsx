import { useEffect , useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./mainpage/main"
import MoreProjects from "./mainpage/moreProjects"
import MoreCerts from './mainpage/moreCerts';
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
    <div className="inter">
      <Router>
         <ScrollToTop/>
        
      {theme=="halloween" && <SplashCursor />}
        <Routes>
             <Route path="/" element={<Main theme={theme} setTheme={setTheme} />} />
          <Route path="/projects" element={<MoreProjects/>}/>
             <Route path="/certs" element={<MoreCerts/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
