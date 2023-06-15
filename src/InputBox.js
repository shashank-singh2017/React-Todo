import './InputBox.css';

function InputBox(props) {
    return (
        <div id="inputBox">
            <input placeholder="Enter an Item to add" onChange={props.captureInputMethod}/>
            <button onClick={props.addItemMethod}>Add Item</button>
        </div>
    );
}

export default InputBox;