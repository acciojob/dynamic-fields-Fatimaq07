import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [fields, setFields] = useState([{ name: "", age: "" }]);

  const handleChange = (index, e) => {
    const newFields = [...fields];
    newFields[index][e.target.name] = e.target.value;
    setFields(newFields);
  };

  const handleAddField = () => {
    setFields([...fields, { name: "", age: "" }]);
  };

  const handleRemoveField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <div>
      <h2>Dynamic Fields Form</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} className="field-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={field.name}
              onChange={(e) => handleChange(index, e)}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(e) => handleChange(index, e)}
            />
            <button type="button" onClick={() => handleRemoveField(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddField}>
          Add Field
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
