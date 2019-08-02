import React from 'react';

function MainGoal(props) {
  const { getMainGoal , mainGoal } = props;
  return (
    <div className="mainGoal">
      {mainGoal ? (
        <div className="todayGoalBlock">
          <h5>TODAY</h5>
          <p>{mainGoal}</p>
        </div>
      ) : (
        <div className="asking_block">
          <p className="ask_for_goal">Hi! What is your main focus for today?</p>
          <input
            className="inputGoalOfDay"
            type="text"
            autoFocus
            maxLength={30}
            onKeyDown={event => {
              if (event.keyCode === 13) {
                getMainGoal(event.target.value);
              }
            }}
          />
        </div>
      )}
    </div>
  );
}

export default MainGoal;
