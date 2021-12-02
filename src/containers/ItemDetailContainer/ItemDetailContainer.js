import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/itemDetail/itemDetail';
import getProducts from '../../services/getProductos';

export default function ItemDetailContainer() {  

    const {id} = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        getProducts 
        .then((response) => {setItem(response.find((prod) => prod.id == parseInt(id)))})
    }, [id]);  

    console.log(item);

    return (
        <div>        
            <ItemDetail
                key={item.id}
                producto={item}
            />
        </div>
    );
}