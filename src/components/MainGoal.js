import React from 'react';

class MainGoal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mainGoal: '',
    }
  }

  componentDidMount() {
    let goalOfDay = JSON.parse(localStorage.getItem("TodayGoal"));

    if (goalOfDay) {
      this.setState({
        mainGoal: goalOfDay
      })
    }
  }

  getMainGoal = (value) => {
    localStorage.setItem("TodayGoal", JSON.stringify(value))

    return this.setState({ mainGoal: value })
  }

  changeMainGoal = () => {
    localStorage.removeItem("TodayGoal");
    this.setState({mainGoal : ''})
  }

  render() {

    let { mainGoal } = this.state;
    return (
      <div className="mainGoal">
        {mainGoal ?
          <div className="todayGoalBlock">
            <h5>TODAY</h5>
            <p>
              {this.state.mainGoal}
              <span
                onClick={() => {this.changeMainGoal()} }
                title="Change main goal"
                className="change_main_goal">
                &#8286;
              </span>
            </p>
          </div>
          :
          <div className="asking_block">
            <p className="ask_for_goal">Hi! What is your main focus for today?</p>
            <input
              className="inputGoalOfDay"
              type='text'
              maxLength={30}
              onKeyDown={(event) => {
                if (event.keyCode === 13) {
                  this.getMainGoal(event.target.value)
                }
              }}
            />
          </div>
        }
      </div>
    )
  }
}


export default MainGoal;