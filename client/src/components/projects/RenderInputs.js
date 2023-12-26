import React from 'react';
import './styles/projectBrief.css';

const RenderInputs = ({ input, meta: { error, touched } }) => {
  return(
    <div>
      <input id="validateInputs" className="owner-name owner-name-mod" {...input} placeholder="For Slack invitation." />
      <div className="formError">
        {touched && error}
      </div>
    </div>
  );
}

export default RenderInputs;
