import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./mainpage/main"
import MoreProjects from "./mainpage/moreProjects"
import ScrollToTop from './components/ux/scrollTop';

function App() {
  return (
    <div className='inter'>
      <Router>
         <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/projects" element={<MoreProjects/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
