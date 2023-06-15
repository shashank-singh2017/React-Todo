import './Item.css';

export default function ItemBox(props) {

    return  (
        <div id="itemBox">
            <span>{props.data}</span>
            <button id={props.data} onClick={props.deleteItemMethod}>Delete</button>
            <button>Edit</button>
        </div>
    );
}