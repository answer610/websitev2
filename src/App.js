
import './App.css';
import React from 'react';
import Coursework from './components/coursework/coursework'
import Projects from './components/projects/projects';
import Tabs from "./components/Tabs";
import About from "./components/about/about";
import Cubing from "./components/cubing/cubing"
function App() {
  return (
    <div className="App-header"> 
      <Tabs className="tab-list">
        <div label="About Me">
          <About></About>
        </div>
        <div label="Projects">
          <Projects></Projects>
        </div>
        <div label="Coursework">
          <Coursework></Coursework>
        </div>
        <div label="Speedcubing">
          <Cubing></Cubing>
        </div>
      </Tabs>
    </div>
  );
}

export default App;
