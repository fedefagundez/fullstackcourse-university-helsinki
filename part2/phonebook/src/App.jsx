import React, { useEffect, useState } from "react";
import axios from 'axios';
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [showAll, setShowAll] = useState(true);

  const hook = () => {
    axios.get('http://localhost:3001/persons')
    .then(
      response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      }
    )
  }

  useEffect(hook, []);

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
    if (newFilter === "") {
      setShowAll(true);
    } else {
      setShowAll(false);
    }
  };

  const addName = (event) => {
    event.preventDefault();
    if (persons.map((person) => person.name).includes(newName)) {
      alert("The name has already been entered.");
    } else {
      setPersons([
        ...persons,
        {
          id: persons.length + 1,
          name: newName,
          number: newNumber,
        },
      ]);
    }
    setNewName("");
    setNewNumber("");
  };

  const personsToShow = showAll
    ? persons
    : persons.filter((person) => {
        const regexFilter = new RegExp(newFilter.toLowerCase());
        const nameLowerCase = person.name.toLowerCase();
        return regexFilter.test(nameLowerCase);
      });

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilter={handleFilterChange}/>
      <h2>Add a new</h2>
      <PersonForm
        addName={addName}
        handleName={handleNameChange}
        handleNumber={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}/>
    </div>
  );
};

export default App;
