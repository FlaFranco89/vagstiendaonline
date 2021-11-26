import React from "react";
import ItemCount from "../ItemCount/ItemCount";

function Item ({ productItem }) {
    return (
        <div className="flex items-center justify-center">
            <img src={productItem.image} alt={productItem.alt} className="h-60"/>
            <div>
                <h5>{productItem.name} | ID: {productItem.id}</h5>
                <p>{productItem.description}</p>
                <p>Precio: ${productItem.price}</p>
                <p>Descripción: {productItem.description}</p>
                <ItemCount stock={10} initial={1}/>
            </div>
    </div>
    )
}

export default Item;