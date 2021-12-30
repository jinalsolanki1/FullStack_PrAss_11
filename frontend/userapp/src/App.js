import './App.css';
import React from "react";
import Reg  from './component/reg';
import Login from './component/login';
import Home from './component/home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route exect path="/" element={<Reg/>}></Route>
        <Route exect path="/login" element={<Login />}></Route>
        <Route exect path="/home" element={<Home />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;

