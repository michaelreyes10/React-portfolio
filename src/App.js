import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Experience from './Pages/Experience'
import Nav from './components/Nav'
import Footer from './components/Footer'
import DisplayProj from './Pages/DisplayProj';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/projects' element={< Projects />} />
        <Route path='/project/:id' element={< DisplayProj />} />
        <Route path='/Experience' element={< Experience />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
