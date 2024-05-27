import React from 'react';
import './App.css';
import { ClickCounter } from './components/ClickCounter';
import { List } from './components/List';
import { PrintButton } from './components/events';
import { State1,ClickButton } from './components/state';
import { PackingList } from './components/list2';
import { SignUpDialog } from './components/state2';

const numbers = [1,2,3,4,5];

function App() {
  return (
    <div className="app">
      <header className="app__header">
        {/* <ClickCounter /> */}
        {/* <List items={numbers} />
        <List items={[1, 2, 3]} /> */}
        {/* <PrintButton />  */}



         {/* <State1 value={2}/>
         <ClickButton/> */}

         {/* <PackingList/> */}

         <SignUpDialog/>

         </header>
    </div>
  );
}

export default App;
