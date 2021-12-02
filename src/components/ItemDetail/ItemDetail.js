
function ItemDetail({ item }) {

    return (

        <div>
            <img src={item.image}/>
            <div>
                <h5>{item.nombre}</h5>
                <p>{item.description}</p>
                <p>Precio: ${item.price}</p>
            </div>
        </div>
    );
}

export default ItemDetail;