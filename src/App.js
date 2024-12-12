import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import DrivePage from './components/Drive';
import'../src/index.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ill-drive" element={<DrivePage />} />
      </Routes>
    </Router>
  );
}

export default App;
