import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Arto Hellas", number: "040-123456" },
    { id: 2, name: "Ada Lovelace", number: "39-44-5323523" },
    { id: 3, name: "Dan Abramov", number: "12-43-234345" },
    { id: 4, name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [showAll, setShowAll] = useState(true);

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
          number: newNumber
        }
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

  const Filter = ({ newFilter }) => {
    return (
      <div>
        filter shown with
        <input
          autoFocus="autoFocus" //keep the focus on the input
          value={newFilter}
          onChange={handleFilterChange}
        />
      </div>
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} />
      <h2>Add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map((person) => (
        <React.Fragment key={person.id}>
          {person.name} {person.number}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default App;
