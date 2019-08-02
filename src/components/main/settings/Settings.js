import React from 'react';
import Renamer from './Renamer';
import Regoaling from './Regoaling';

function Settings(props) {
  const {
    changeUserName,
    changeMainGoal,
    handleSubmitGoal,
    handelSubmitName,
    handleInputChange,
    isRenaming,
    isRegoaling,
    todoToggle,
  } = props;
  return (
    <div>
      <ul className="settings">
        <li className="settings_text">Settings</li>
        <li className="settings_renamer">
          <button type="button" onClick={changeUserName}>
            Change your name
          </button>
        </li>
        <li className="settings_regoaler">
          <button type="button" onClick={changeMainGoal}>
            Change main goal
          </button>
        </li>
      </ul>
      {isRenaming ? (
        <Renamer
          handelSubmitName={handelSubmitName}
          handleInputChange={handleInputChange}
          todoToggle={todoToggle}
        />
      ) : null}
      {isRegoaling ? (
        <Regoaling
          handleSubmitGoal={handleSubmitGoal}
          handleInputChange={handleInputChange}
          todoToggle={todoToggle}
        />
      ) : null}
    </div>
  );
}

export default Settings;
