import './App.css';
import Signup from './Signup';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './main/Home';
import { UserProvider } from './hooks/UserProvider';
import BlogDetails from './components/BlogDetails';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Signup />} />
      <Route
            path="/login"
            element={
                <UserProvider>
                    <Login />
                </UserProvider>
            }
            />
      <Route
            path="/home"
            element={
                <UserProvider>
                    <Home />
                </UserProvider>
            }
            />
        <Route path="/blog/:id" element={<BlogDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
