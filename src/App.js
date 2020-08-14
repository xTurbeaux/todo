import {Component} from 'react';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export class ToDoBanner extends Component {
  render = () =>
    <h4 className="bg-primary text-white text-center p-2">
      {this.props.displayName}'s To Do List ({this.props.tasks.filter(
        x => !x.done).length
      } items still to do)
    </h4>
}
export default class App extends Component {
  // Above we have created a class called App that extends the functionality of the component class

  // The export Keyword makes the class available for use outside of the JS file where it is created 

  constructor() {
    //we are going to create state data for our component. to do that we need to create a constroctor method.
    //this method will get called when an object is created using this class. said another way, this method will be called when the component is intialized

    //to ensure that we ahve all the  necessarey features from react to create a stateful component, we need to call a method called super(). This super() calls the constructor for the {Component} class in react.
    super();

    //React components have a special property called "state" which is used to define the state of data (new old, refreshed?)

    this.state ={
      userName: "Aaron M..",
      todoItems: [
        {action: "Move Burn Pile", done:false},
        {action: "Mow", done:false},
        {action: "Recon shoreline", done:false},
        {action: "Collect the bit", done:true},
        {action: "Detail clean inside of car", done:false}
      ]
    }

  } 

  


  // When using the Lambda syntax the return keyword is not needed. 

  render = () => 
  <div>
    <ToDoBanner
      displayName = {this.state.userName}
      tasks = {this.state.todoItems}
    />
  </div>

};


//export default App;
