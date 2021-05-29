import Clock from './clock'
// import { render } from '@testing-library/react';
import './App.css';
import React, {Component} from 'react'

class App extends Component {
 render(){
   return (
     <div className="App">
       <div className="clock">
         <Clock />
       </div>
     </div>
   );
 }
}

export default App;
