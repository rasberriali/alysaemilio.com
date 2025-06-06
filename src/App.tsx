import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./mainpage/main"
import MoreProjects from "./mainpage/moreProjects"

function App() {
  return (
    <div className='inter '>
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/projects" element={<MoreProjects/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
