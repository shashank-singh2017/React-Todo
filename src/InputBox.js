import './InputBox.css';

function InputBox() {

    function addItem() {
        console.log("addItem clicked");
        
    }

    return (
        <div id="inputBox">
            <input placeholder="Enter an Item to add"/>
            <button onClick={addItem}>Add</button>
        </div>
    );
}

export default InputBox;