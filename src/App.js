import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';


function App() {
  return (
    <div className="App">
       <BrowserRouter >
        
        <Routes>
          <Route path='/' element={<Home />}/>   
          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/userlogin' element={<UserLogin />} />      

        </Routes>

       </BrowserRouter>  
    </div>
  );
}

export default App;
