import './Item.css';


export default function Item(props) {
    return  (
        <div id="itemBox">
            <span>{props.property1}</span>
            <button>Delete</button>
        </div>
    );
}