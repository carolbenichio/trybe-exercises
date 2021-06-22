import React from 'react';
import './App.css';
import TaskList from './Task';
import { musics, arrayTasks } from './Listas';

function App() {
  return (
    <div>
      <TaskList array={arrayTasks} oi='tdbom' bla="bla"/>
      <TaskList array={musics}/>
    </div>
  );
}

export default App;