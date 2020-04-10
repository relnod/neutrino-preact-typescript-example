/** @jsx h */
import { h, Component } from 'preact';
import './App.css';

export default class App extends Component {
  state = {
    name: 'neutrino-preact-typescript-example',
  };

  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <h1>
          Welcome to
          {name}
        </h1>
      </div>
    );
  }
}
