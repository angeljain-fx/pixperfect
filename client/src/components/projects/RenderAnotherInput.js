import React from 'react';
import './styles/projectBrief.css';

const RenderAnotherInput = ({ input, meta: { error, touched } }) => {
  return(
    <div>
      <input id="validateInputs" className="owner-name owner-name-mod" {...input} maxLength="40" />
      <div className="formError">
        {touched && error}
      </div>
    </div>
  );
}

export default RenderAnotherInput;
