import React from 'react';

function GetUserName(props) {
  let { getName, handelSubmitName } = props;
  return (
    <div className="modalWindow">
      <h1 className="first_meeting">Welcome to your first ToDo List</h1>
      <p>Please write your Name</p>
      <form
        className="get_user_name_form"
        onSubmit={event => {
          event.preventDefault();
          handelSubmitName();
        }}
      >
        <input onChange={event => getName('tempName', event.target.value)} />
      </form>
    </div>
  );
}

export default GetUserName;
