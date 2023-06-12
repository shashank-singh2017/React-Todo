import './App.css';
import Header from './Header';
import InputBox from './InputBox';
import Item from './Item';

import {useState} from 'react';


function App() {
  // State is a collection of variables
  // Initialize a state
  var [items, setItems] = useState(["Mango", "Orange", "Eggs", "Bread"]);

  console.log(items);

  return (
    <div id="todoapp">
      <Header />
      <InputBox />

      {items.map((item) => {
        return (
          <Item property1={item}/>
        );
      })}
    </div>
  );
}

export default App;