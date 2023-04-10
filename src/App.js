import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';

import Adminportal from './components/Adminportal';
import UserDashboard from './components/UserDashboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/userlogin' element={<UserLogin />} />
          <Route path='/admin/*' element={<Adminportal />} />
          <Route path='/user/*' element={<UserDashboard />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
