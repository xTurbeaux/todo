import {Component} from 'react';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {ToDoBanner}from './ToDoBanner';
import {ToDoRow} from './ToDoRow';


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
        {action: "Move Burn Pile", done: false},
        {action: "Mow", done: false},
        {action: "Recon shoreline", done: false},
        {action: "Collect the bit", done: true},
        {action: "Detail clean inside of car", done: false}
      ]
    }

  } 

  //Part of Feature 3
  //  If the ToDoRow Component's "done" property experiences a change event (checking the Done box in the UI) then the ToDoRow component calls a Callback method called toggleTodo (below) and passes toggleTodo the checked todo item

  todoTableRows = (isTaskDone) => this.state.todoItems.filter( x => x.done == isTaskDone).map( notCompleted => 
    <ToDoRow
      key = {notCompleted.action}
      item = {notCompleted}
      callback = {this.toggleTodo} //teh callback will be invoked when everything in todorow is finished 
    />
    );

  // Feature 4
  //  The toggleTodo method is invoked as a callback when the ToDoRow component has a change event to the "done" property
  //  .setState allows the data to be updated
  //  When setState is invoked, React will make a new object with the changes.  Under the hood, React will compare the new object with the DOM version of the object.  If there is a difference between the 2 objects then the DOM will get re-drawn and we see the changes 
  // the toggleTodo function is invoked as a callback from the <ToDoRow> component

  toggleTodo = (todo) => this.setState(
    {todoItems: this.state.todoItems.map(
      item => item.action === todo.action ? {...item, done: !item.done } : item
    )}
  );

  
  
  // When using the Lambda syntax the return keyword is not needed. 

  render = () => 
  <div>
    <ToDoBanner
      displayName = {this.state.userName}
      tasks = {this.state.todoItems}
    />
    {/* Feature 3*/}
    <table className="table talbe-striped table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Done</th>
        </tr>
      </thead>
      <tbody>
        {this.todoTableRows(false)}
      </tbody>
    </table>
  </div>

};


//export default App;
