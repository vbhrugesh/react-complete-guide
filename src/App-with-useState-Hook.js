import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [ personsState, setPersonsState ] = useState({
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
      }
    ],
    otherState: "Some other state"
  });

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS:  this.state.persons[0].name = "Test User1 switch";
    setPersonsState({
      persons: [
        {
          name: "Test User1 update",
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
      ],
      otherState: personsState.otherState
    });
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
      <button onClick={ switchNameHandler }>Switch Name</button>
      <Person 
        name={ personsState.persons[0].name }
        age={ personsState.persons[0].age }></Person>
      <Person
        name={ personsState.persons[1].name }
        age={ personsState.persons[1].age }
        click={ switchNameHandler }>My Hobbies: Racing</Person>
      <Person
        name={ personsState.persons[2].name }
        age={ personsState.persons[2].age }></Person>
    </div>
  );
}

export default App;