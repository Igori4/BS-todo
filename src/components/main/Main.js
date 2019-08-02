import React from 'react';
import Greeting from './greeting/Greeting';
import Todo from './todo/Todo';
import Settings from './settings/Settings';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      tempName: '',
      mainGoal: '',
      tempGoal: '',
      isRenaming: false,
      isRegoaling: false,
    };
  }

  componentDidMount() {
    let userNameFomStor = JSON.parse(localStorage.getItem('userName'));
    let goalOfDay = JSON.parse(localStorage.getItem('TodayGoal'));
    if (goalOfDay) {
      this.setState({ mainGoal: goalOfDay });
    }
    if (userNameFomStor) {
      this.setState({ userName: userNameFomStor });
    }
    return null;
  }

  handleInputChange = (stateProperty, value) => {
    this.setState({
      [stateProperty]: value,
    });
  };

  handelSubmitName = () => {
    localStorage.setItem('userName', JSON.stringify(this.state.tempName));
    this.setState(prevState => {
      return { userName: prevState.tempName, isRenaming: false };
    });
  };

  handleSubmitGoal = () => {
    localStorage.setItem('TodayGoal', JSON.stringify(this.state.tempGoal));

    this.setState(prevState => {
      return {
        mainGoal: prevState.tempGoal,
        isRegoaling: false,
      };
    });
  };

  getMainGoal = value => {
    localStorage.setItem('TodayGoal', JSON.stringify(value));

    return this.setState({ mainGoal: value });
  };

  changeUserName = () => {
    const { isRegoaling, isRenaming } = this.state;

    if (!isRegoaling) {
      this.setState({ isRenaming: true });
    }
    if (!isRegoaling && isRenaming) {
      this.setState({ isRenaming: false });
    }
  };

  changeMainGoal = () => {
    const { isRegoaling, isRenaming } = this.state;

    if (!isRenaming) {
      this.setState({ isRegoaling: true });
    }
    if (!isRenaming && isRegoaling) {
      this.setState({ isRegoaling: false });
    }
  };

  todoToggle = isShown => this.setState({ [isShown]: false });
    

  render() {
    let { userName, isRenaming, mainGoal, isRegoaling } = this.state;
    return (
      <main className="main">
        <Settings
          changeUserName={this.changeUserName}
          changeMainGoal={this.changeMainGoal}
          handleSubmitGoal={this.handleSubmitGoal}
          handelSubmitName={this.handelSubmitName}
          handleInputChange={this.handleInputChange}
          isRenaming={isRenaming}
          isRegoaling={isRegoaling}
          todoToggle={this.todoToggle}
        />
        <Greeting
          userName={userName}
          mainGoal={mainGoal}
          getMainGoal={this.getMainGoal}
          handelSubmitName={this.handelSubmitName}
          handleInputChange={this.handleInputChange}
        />
        {userName && !isRenaming && !isRenaming  ? <Todo /> : null}
      </main>
    );
  }
}

export default Main;
