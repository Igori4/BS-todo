import React from 'react';
import GetUserName from './GetUserName';
import Time from './Time';
import MainGoal from './MainGoal';

class Greeting extends React.Component {

  state = {
    userName: '',
    tempName: '',
    time: new Date(),
    periodOfDay: '',
  };

  componentDidMount() {
    let userNameFomStor = JSON.parse(localStorage.getItem("userName"));
    this.getPerionOfDay(this.state.time.getHours());

    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );

    return (
      userNameFomStor ? this.setState({ userName: userNameFomStor }) : ''
    )
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  handleInputChange = (name) => {
    this.setState({
      tempName: name,
    })
  };

  handelSubmit = () => {
    localStorage.setItem("userName", JSON.stringify(this.state.tempName))
    this.setState((prevState => {
      return { userName: prevState.tempName }
    }));
  };

  tick() {
    this.setState({
      time: new Date()
    });
  }

  getPerionOfDay = (time) => {
    let period = '';

    if (time >= 12 && time < 18) {
      period = 'afternoon';
    } else if (time >= 18 && time <= 23) {
      period = 'evening';
    } else if (time >= 0 && time <= 6) {
      period = 'night';
    } else {
      period = 'morning';
    };

    if(time === 0) {
      localStorage.removeItem('TodayGoal');
    }
    console.log(time)
    this.setState({ periodOfDay: period });
  };

  render() {
    let { userName, time } = this.state;

    return (
      <div className="greeting">
        {userName ?
          <div className="clockTime">
            <Time time={time} getPeriodOfDay={this.getPerionOfDay} />
            <p className="greeting">Good {this.state.periodOfDay}, {userName}</p>
          </div>
          :
          <GetUserName
            getName={this.handleInputChange}
            handelSubmit={this.handelSubmit}
          />}
          {userName ? <MainGoal /> : null}
      </div>
    );
  };
};

export default Greeting;
