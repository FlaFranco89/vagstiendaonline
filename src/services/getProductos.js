import info from './infoProductos.js';

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(info)
        reject("Oops! I did it again.")
        },2000);
    });

export default getProducts;