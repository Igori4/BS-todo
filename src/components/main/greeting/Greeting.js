import React from 'react';
import GetUserName from './GetUserName';
import Time from './Time';
import MainGoal from './MainGoal';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      periodOfDay: '',
    };
  }

  componentDidMount() {
    this.getPerionOfDay(this.state.time.getHours());
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  getPerionOfDay = time => {
    let period = '';

    if (time >= 12 && time < 18) {
      period = 'afternoon';
    } else if (time >= 18 && time <= 23) {
      period = 'evening';
    } else if (time >= 0 && time <= 6) {
      period = 'night';
    } else {
      period = 'morning';
    }

    if (time === 0) {
      localStorage.removeItem('TodayGoal');
    }
    this.setState({ periodOfDay: period });
  };

  render() {
    let { time } = this.state;
    let { userName, handleInputChange, handelSubmitName, mainGoal, getMainGoal } = this.props;

    return (
      <div className="greeting">
        {userName ? (
          <div className="clockTime">
            <Time time={time} getPeriodOfDay={this.getPerionOfDay} />
            <p className="greeting">
              Good {this.state.periodOfDay}, {userName}
            </p>
          </div>
        ) : (
          <GetUserName
            getName={handleInputChange}
            handelSubmitName={handelSubmitName}
          />
        )}
        {userName ? <MainGoal mainGoal={mainGoal} getMainGoal={getMainGoal} /> : null}
      </div>
    );
  }
}

export default Greeting;
