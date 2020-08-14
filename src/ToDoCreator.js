import React, { Component } from 'react';

export class ToDoCreator extends Component {
  constructor(props){
    super(props);
    this.state = {newItemText: ""}
  } // End of Constructor 


  // 5c
  // method for the on Change event of the input box below 
  updateNewTextValue = (event) => {
    this.setState(
      {newItemText: event.target.value}
    );
  };

  render = () =>
    <div className="my-1">
      <input className="form-control" value={this.state.newItemText}
      onChange={this.updateNewTextValue}
      />
    </div>
};