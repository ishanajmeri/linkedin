import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './routes/Routes';
import auth from './services/authService';
import './App.css';

const browserHistory = createBrowserHistory();

class App extends Component {
  state = { user: {} };
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    return (
      <React.Fragment>
        <Router history={browserHistory}>
          <Routes user={this.state.user} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
