import React from 'react';

function Renamer(props) {
  const { handelSubmitName, handleInputChange, todoToggle } = props;
  return (
    <div className="renamer">
      <button
        type="button"
        className="changer_toggler-button"
        onClick={() => todoToggle('isRenaming')}
      >
        X
      </button>
      <form
        onSubmit={event => {
          handelSubmitName();
          event.preventDefault();
        }}
      >
        <h2 className="changer_title">Please write new name</h2>
        <input
          className="changer_input"
          minLength="2"
          maxLength="15"
          onChange={event => handleInputChange('tempName', event.target.value)}
          placeholder="New Name"
        />
      </form>
    </div>
  );
}

export default Renamer;
