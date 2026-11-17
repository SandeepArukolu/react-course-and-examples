import logo from './logo.svg';
import './App.css';
import CreateNewComponent from './Examples/CreateNewComponentAndRun/NewComponent';
import { useState } from 'react';
import {PersonObject} from './Examples/ImportsAndExports/NamedExports'
import DefaultExport from './Examples/ImportsAndExports/DefaultExports'
import ChildComponent from './Examples/PropsPassDataParentToChild/ChildComponent'
import Newfunc from './Examples/DiffrentWaysToCreateFunctions/index'
import ChildPropsFunc from './Examples/ChildProps';
import FragmentFunc from './Examples/FragmentsInReact';
import ReactEventHandling from './Examples/ReactEventHandling';

function App() {

  const userObject = [
  {UserName: 'Sandeep', Age: 30, Location : 'Hyd'},
  //{UserName: 'Anil', Age: 28, Location : 'Knr'},
  ]
  return (<>
    // <div className="App">
    //   {/* <CreateNewComponent/>
    //   <ul>
    //     <li>Name: {PersonObject.Name}</li>
    //      <li> Age: {PersonObject.Age}</li>
    //       <li>Location: {PersonObject.Location}</li>
    //   </ul>
    //   <DefaultExport/> */}
    {/* //   <ChildComponent  UserName = 'Sandeep'  Age= '30' Location ='Hyd'/> */}
    // </div>
    {/* <Newfunc/> */}
{/* <ChildPropsFunc Name = 'Sandeep' Location = 'Hyd'>
<button>Like</button>
<button>Share</button>
<button>Subscribe</button>
</ChildPropsFunc> */}
{/* <FragmentFunc/> */}
<ReactEventHandling/>
</>
  );
}

export default App;
