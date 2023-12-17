const Form = ({ newFilter, handleFilter }) => {
  return (
    <div>
      <label htmlFor="txtCountry">find countries</label>
      <input
        id="txtCountry"
        type="text"
        value={newFilter}
        onChange={handleFilter}
      />{" "}
    </div>
  );
};

export default Form;
