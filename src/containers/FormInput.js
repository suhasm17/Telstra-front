import { useState } from "react";
import "../formInput.css";


const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput" style={{ marginRight: '0px' }}>
      <label> </label>
      <input
        {...inputProps}
        onChange={onChange}
        style={{
          marginBottom: '10px',
          //border: '1px solid #ccc',
          //borderRadius: '5px',
          padding: '8px',
          fontSize: '16px',
          color: '#333',
          fontFamily: 'Exo, sans-serif',
        }}
        onBlur={handleFocus}             
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;