import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
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
          <Route path='/' element={<Home />}/>   
          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/userlogin' element={<UserLogin />} />     
          <Route path='/userPortal' element= {<UserDashboard />} />
          <Route path = '/admin/*' element={<Adminportal />} />

        </Routes>

       </BrowserRouter>  
    </div>
  );
}

export default App;
