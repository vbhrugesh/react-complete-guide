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
    otherState: "Some other state",
    showPersons: false
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

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
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

    let persons = null;
    if(this.state.showPersons) {
      persons = (
      <div>
        { this.state.persons.map((person, index) => {
          return <Person
              name={ person.name } 
              age={ person.age }
              click={ () => this.deletePersonHandler(index) }></Person>;
        }) }
      </div>
      );
    }

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
          onClick={ this.togglePersonsHandler }>Toggle Persons</button>
        
        { persons }        
      </div>
    );
  }
}

export default App;
