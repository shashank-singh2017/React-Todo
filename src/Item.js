import './Item.css';


export default function Item(props) {
    return  (
        <div id="itemBox">
            {/* // access the data1 through props */}
            <span>{props.data1}</span>
            <button>Delete</button>
        </div>
    );
}