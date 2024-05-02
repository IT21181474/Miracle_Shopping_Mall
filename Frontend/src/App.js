import './App.css';
import Home from './Pages/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Shop from './Pages/shop';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/dashboard/*' element={<Dashboard/>}></Route>
            <Route path='/shop' element={<Shop/>}></Route>


     
            
         </Routes>
</BrowserRouter>

      </header>
    </div>
  );
}

export default App;
