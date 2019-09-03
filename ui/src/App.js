import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import reactLogo from './images/react.svg';
import playLogo from './images/play.svg';
import scalaLogo from './images/scala.svg';
import Client from "./Client";
import DoubleView from "./DoubleView";

import './App.css';

const Tech = ({match}) => {
  return <div>Current Route: {match.params.tech}</div>
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      controlPoints: []
    };
  }

  async componentDidMount() {
    Client.getSummary(summary => {
      this.setState({
        title: summary.content
      });
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>{this.state.title}</h1>
          <div>
            <DoubleView points = {this.state.controlPoints}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
