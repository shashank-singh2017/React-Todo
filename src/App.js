import './App.css';
import Header from './Header';
import InputBox from './InputBox';
import ItemBox from './ItemBox';
import { useState } from 'react';

// Parent component of my React application

function App() {
  // State is a collection of variables
  // Initialize a state
  const [items, setItems] = useState(["Enjoy Weekend", "Study a Book"]);
  const [inputValue, setInputValue] = useState("");

  function addItem() {
    var newItems = [...items, inputValue];
    setItems(newItems);
  }

  function captureInput(event) {
    console.log("My current input text:", event.target.value);

    setInputValue(event.target.value);
  }

  function deleteItem(event) {
    console.log(event.target.id);
    const newItems = items.filter((it) => it != event.target.id)
    setItems(newItems);
  }


  return (
    <div id="todoapp">
      {/* This is how we call a component */}
      <Header />
      <InputBox addItemMethod={addItem} captureInputMethod={captureInput}/>
      
      {items.map((it) => {
        return (
          <ItemBox data={it} deleteItemMethod={deleteItem}/>
        );
      })};
      
    </div>
  );
}

export default App;
