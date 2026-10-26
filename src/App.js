import logo from './logo.svg';
import './App.css';
import CreateNewComponent from './Examples/CreateNewComponentAndRun/NewComponent';
import { useState } from 'react';
import {PersonObject} from './Examples/ImportsAndExports/NamedExports'
import DefaultExport from './Examples/ImportsAndExports/DefaultExports'
import ChildComponent from './Examples/PropsPassDataParentToChild/ChildComponent'

function App() {

  const userObject = [
  {UserName: 'Sandeep', Age: 30, Location : 'Hyd'},
  //{UserName: 'Anil', Age: 28, Location : 'Knr'},
  ]
   
  
  return (
    <div className="App">
      {/* <CreateNewComponent/>
      <ul>
        <li>Name: {PersonObject.Name}</li>
         <li> Age: {PersonObject.Age}</li>
          <li>Location: {PersonObject.Location}</li>
      </ul>
      <DefaultExport/> */}
      <ChildComponent  UserName = 'Sandeep'  Age= '30' Location ='Hyd'/>
    </div>
  );
}

export default App;
