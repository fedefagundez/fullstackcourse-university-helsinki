const Persons = ({personsToShow}) => {
    return(
      <div>
        {personsToShow.map((person) => (
        <React.Fragment key={person.id}>
          {person.name} {person.number}
          <br />
        </React.Fragment>
      ))}
      </div>
    );
  };

export default Persons;