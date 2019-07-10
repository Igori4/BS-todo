import React from 'react';

function Time(props) {
    let { time } = props;
    let hour = time.getHours().toString();
    let min = time.getMinutes().toString();

    return (
        <p className="time">
            {hour.length === 1 ? '0' + hour : hour}
            :
            {min.length === 1 ? '0' + min : min}
        </p>
    )
}

export default Time;

