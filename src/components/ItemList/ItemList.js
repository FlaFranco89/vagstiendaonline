import Item from "../Item/Item";

function ItemList ({ products }) {
    return (
        <div>
            {products.map(products => (
                <Item productItem = {products} />
            ))}
        </div>
    );
}

export default ItemList;