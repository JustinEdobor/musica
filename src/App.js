import React from 'react'
import './App.css';
import { 
 BrowserRouter as Router,
 Switch,
 Route,
 Redirect,
 } from 'react-router-dom';
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import Topbody from './components/Topbody.js'
import Bottombody from './components/Bottombody'
import ControlBar from './components/ControlBar'
import Library from './routes/Library'
import Home from './routes/Home'


function App(){
    return (
    <> 
    <Nav />
    <div className="flex">
      <Sidebar />
    <div className="contain">
      <Topbody />
      <Bottombody />
    </div>
    </div>
    <ControlBar />
    </>
    );
}

export default App;