import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import HelloPage from './HelloPage';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <button className="cyber-button" onClick={() => navigate('/hello')}>
        Click me
      </button>
    </div>
  );
}

function App() {
  return (
    <Router basename="/hello-world">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<HelloPage />} />
      </Routes>
    </Router>
  );
}

export default App;
