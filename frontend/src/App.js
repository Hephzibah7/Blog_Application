import './App.css';
import Signup from './Signup';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './main/Home';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
