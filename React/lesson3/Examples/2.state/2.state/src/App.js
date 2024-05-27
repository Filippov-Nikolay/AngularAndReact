import React from 'react';
import './App.css';
import { ClickCounter } from './components/ClickCounter';
import { List } from './components/List';
import { Clock } from './components/Clock';
import {Avatar} from './components/avatar'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numbers: [1,2,3,4,5]
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Clock /> */}
          {/* <ClickCounter />
          <List items={this.state.numbers} />
          <List items={this.state.numbers} />
         */}
     < Avatar name="Test" position = 'left' twitter='accauntTwitter' facebook = 'accauntFacebook'/>
        </header>
      </div>
    );
  }
}

export default App;
