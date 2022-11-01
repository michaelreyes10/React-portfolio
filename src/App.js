import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Expirience from './Pages/Expirience'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
        <Route path='/' element={< Home />} />
        <Route path='projects' element={< Projects />} />
        <Route path='Expirience' element={< Expirience />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
