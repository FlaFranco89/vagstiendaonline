import ItemCount from "../../components/ItemCount/ItemCount";
import "../ItemListContainer/ItemListContainer.css";

function ItemListContainer (props){
    return (
        <div>
            <h2 className="mensaje">{props.greeting}</h2>
            <ItemCount stock={10} initial={1} />
        </div>
    );
}

export default ItemListContainer;