import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Agents from './pages/Agents'
import Weapons from './pages/Weapons'
import Maps from './pages/Maps'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/agents" element={<Agents />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
    </Router>
  )
}

export default App