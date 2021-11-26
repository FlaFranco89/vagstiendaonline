import React, {useState} from "react";

function ItemCount ({stock, initial, onAdd}) {
    const [countItems, setCountItems] = useState (initial);

    const onIncrement = (stock) => {
        return countItems + 1 <= stock ? setCountItems (countItems + 1) : countItems;
    }

    const onDecrement = () => {
        return countItems - 1 >= 0 ? setCountItems (countItems - 1) : 0;
    }

    return (
        <div className="text-center mt-2">
            <div>
                <button onClick={onDecrement} className="bg-yellow-400 py-1 px-2 rounded">-</button>
                <input type="text" value={countItems} readOnly className="text-center w-10 bg-yellow-100 py-1 px-2"></input>
                <button onClick={() => onIncrement(stock)} className="bg-yellow-400 py-1 px-2 rounded">+</button>
            </div>
            <div>
            <button onClick={onAdd} className="bg-yellow-400 py-1 px-2 rounded mt-2">Agregar al Carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;