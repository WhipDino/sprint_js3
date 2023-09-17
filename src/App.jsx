import { HashRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
