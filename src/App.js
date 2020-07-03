import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: "Test User1",
        age: 21
      },
      {
        name: "Test User2",
        age: 23
      },
      {
        name: "Test User3",
        age: 22
      },
    ],
    otherState: "Some other state"
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS:  this.state.persons[0].name = "Test User1 switch";
    this.setState({
      persons: [
        {
          name: newName,
          age: 21
        },
        {
          name: "Test User2",
          age: 23
        },
        {
          name: "Test User3",
          age: 30
        },
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: "Test User1",
          age: 21
        },
        {
          name: event.target.value,
          age: 23
        },
        {
          name: "Test User3",
          age: 30
        },
      ]
    });
  }

  render() {
    
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <button
          style={ style }
          onClick={ () => this.switchNameHandler("Test USer1 Update using button") }>Switch Name</button>
        <Person
          name={ this.state.persons[0].name } 
          age={ this.state.persons[0].age }></Person>
        <Person
          name={ this.state.persons[1].name } 
          age={ this.state.persons[1].age } 
          click={ this.nameChangedHandler.bind(this, "Test User1 update") } 
          changed={ this.nameChangedHandler }>My Hobbies: Racing</Person>
        <Person
          name={ this.state.persons[2].name } 
          age={ this.state.persons[2].age }></Person>
      </div>
    );
  }
}

export default App;
