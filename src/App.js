import React from 'react'
import About from './Components/About'
import Me from './Components/Me'
import SkillsTools from './Components/SkillsTools';
import Navigation from './Components/Navigation'
import './App.css';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    
    <div className="App">
      <div className='Box'>
      <Navigation />
      </div>
      <div className='Link'>
      <Switch>
      <Route path='/Me' component = {Me} />
      <Route path='/SkillsTools' component = {SkillsTools} />
      <Route path='/About' component= {About} />
      </Switch>
      </div>
      
      
    </div>
  );
}

export default App;
