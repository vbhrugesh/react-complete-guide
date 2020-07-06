import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${ props =>  props.alt ? 'red' : 'green' };
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${ props => props.alt ? 'salmon' : 'lightgreen' };
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      {
        id: "lmck",
        name: "Test User1",
        age: 21
      },
      {
        id: "lmck2",
        name: "Test User2",
        age: 23
      },
      {
        id: "lmck3",
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

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex((p) => {
		return p.id === id;
	});
	
	const person = {
		...this.state.persons[personIndex]
	};

	// const person = Object.assign({}, this.state.persons[personIndex]);

	person.name = event.target.value;
	const persons = [...this.state.persons];
	persons[personIndex] = person;

	this.setState( { persons: persons });

    // this.setState({
    //   persons: [
    //     {
    //       name: "Test User1",
    //       age: 21
    //     },
    //     {
    //       name: event.target.value,
    //       age: 23
    //     },
    //     {
    //       name: "Test User3",
    //       age: 30
    //     },
    //   ]
    // });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
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

    let persons = null;
    if(this.state.showPersons) {
      persons = (
      <div>
        { this.state.persons.map((person, index) => {
          return <Person
              name={ person.name } 
              age={ person.age }
              click={ () => this.deletePersonHandler(index) }
              key = { person.id }
              changed = { (event) =>  this.nameChangedHandler(event, person.id) }></Person>;
        }) }
      </div>
      );
    }

    const classes = [];

    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <p className={ classes.join(' ') }>Working!</p>
        <StyledButton
          onClick={ this.togglePersonsHandler }
          alt={ this.state.showPersons }>
            Toggle Persons
        </StyledButton>
        
        { persons }        
      </div>
    );
  }
}

export default App;
