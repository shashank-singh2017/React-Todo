import './InputBox.css';

function InputBox() {
    function addItem() {
        // Read the capturedInput from state

        // Update the items using setItems hook into state
    }

    function captureInput(event) {
        console.log(event.target.value);

        // store the current string typed by the user in the state 
    }

    return (
        <div id="inputBox">
            <input placeholder="Enter an Item to add" onChange={captureInput} />
            <button onClick={addItem}>Add</button>
        </div>
    );
}

export default InputBox;