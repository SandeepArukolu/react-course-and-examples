import logo from './logo.svg';
import './App.css';
import CreateNewComponent from './Examples/CreateNewComponentAndRun/NewComponent';
import { useState } from 'react';
import {PersonObject} from './Examples/ImportsAndExports/NamedExports'
import DefaultExport from './Examples/ImportsAndExports/DefaultExports'

function App() {
  return (
    <div className="App">
      {/* <CreateNewComponent/> */}
      <ul>
        <li>Name: {PersonObject.Name}</li>
         <li> Age: {PersonObject.Age}</li>
          <li>Location: {PersonObject.Location}</li>
      </ul>
      <DefaultExport/>
    </div>
  );
}

export default App;
