import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import CompaniesList from './Components/CompaniesList';
import CompanyDetail from './Components/CompanyDetail';
import JobsList from './Components/JobsList';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Components/Profile';

function App() {
  return (    
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/companies" element={<CompaniesList />}></Route>
        <Route path="/companies/:company" element={<CompanyDetail />}></Route>
        <Route path="/jobs" element={<JobsList />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
