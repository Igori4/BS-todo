import React from 'react';

function Regoaling(props) {
  const { handleSubmitGoal, handleInputChange, todoToggle } = props;
  return (
    <div className="regoaler">
      <button
        type="button"
        className="changer_toggler-button"
        onClick={() => todoToggle('isRegoaling')}
      >
        X
      </button>
      <form
        onSubmit={event => {
          handleSubmitGoal();
          event.preventDefault();
        }}
      >
        <h2 className="changer_title">Change main Goal</h2>
        <input
          className="changer_input"
          minLength="3"
          maxLength="20"
          placeholder="New main goal"
          onChange={event => {
            handleInputChange('tempGoal', event.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default Regoaling;
