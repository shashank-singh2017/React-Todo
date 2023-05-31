import './App.css';
import Header from './Header';
import InputBox from './InputBox';
import Item from './Item';

function App() {

  var itemName1 = "Mango";
  var itemName2 = "Bread";
  var itemName3 = "Eggs";

  return (
    <div>
      <Header />
      <InputBox />
      {/* // Pass data1 ("Mango" or "Bread" etc. in a variable named data1) */}
      <Item data1={itemName1} />
      <Item data1={itemName2} />
      <Item data1={itemName3} />
    </div>
  );
}

export default App;




