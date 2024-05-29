import React from 'react';
import './App.css';
import {Avatar} from './components/avatar'
import { Counter } from './components/counter';

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
          {/* <Counter /> */}
      
     < Avatar name="Test" position = 'left' twitter='accauntTwitter' facebook = 'accauntFacebook'/>
        </header>
      </div>
    );
  }
}

export default App;
