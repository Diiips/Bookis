import React, { useState } from "react";
import "./AddDynamicInputFields.css"; // Make sure to import the CSS file
import { Button } from "@react-pdf-viewer/core";

function AddRemoveInputField({formData,setFormData}) {
  const [inputFields, setInputFields] = useState([{ fullName: '' }]);

  const addInputField = () => {
    setInputFields([...inputFields, { fullName: '' }]);
  };

  const removeInputField = (index) => {
    const updatedFields = inputFields.filter((_, i) => i !== index);
    setInputFields(updatedFields);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFields = inputFields.map((field, i) =>
      i === index ? { ...field, [name]: value } : field
    );
    setInputFields(updatedFields);
    setFormData({
      ...formData,
      ["BookName"]: inputFields
  });

  };

  return (
    <div className="form-container">
      {inputFields.map((data, index) => (
        <div className="Dynamic-input-group" key={index}>
          <div className="Dynamic-input-field">
          <input
            type="text"
            onChange={(event) => handleChange(index, event)}
            value={data.fullName}
            name="fullName"
            placeholder="Book Name"
            />
            
          </div>

          <div className="remove-button">
          {inputFields.length > 1 && (
            <button
              
              onClick={() => removeInputField(index)}
            >
              x
            </button>
          )}
          </div>
          
        </div>
      ))}
      
      <button className="button-5" onClick={addInputField}>
        Add New
      </button>
    </div>
  );
}

export default AddRemoveInputField;
