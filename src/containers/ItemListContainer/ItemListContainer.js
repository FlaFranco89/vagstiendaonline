import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList.js";
import getProductos from "../../services/getProductos.js";
import "../ItemListContainer/ItemListContainer.css";

function ItemListContainer (props){

    const [products, setProducts] = useState ([]);

    useEffect (() => {
        getProductos
        .then(response => setProducts(response))
        .catch(error => console.log(error))
    }, []);


    return (
        <div>
            <h2 className="mensaje">{props.greeting}</h2>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;