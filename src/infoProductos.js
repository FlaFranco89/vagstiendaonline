import vagCactus from './assets/img/vagcactus.png';
import vagBananas from './assets/img/vagbananas.png';
import vagLimones from './assets/img/vaglimones.png'

const info = [
    {
        id: 1,
        name: "Vag Cactus",
        price: 1500,
        image: vagCactus,
        alt: "imagen de Totebag con diseño de Cactus.",
        description: "Totebag con diseño de Cactus, sobre tela color negro.",
        stock: 6
    },

    {
        id: 2,
        name: "Vag Bananas",
        price: 1320,
        image: vagBananas,
        alt: "imagen de Totebag con diseño de Bananas.",
        description: "Totebag con diseños de bananas, sobre tela color naranja.",
        stock: 10
    },

    {
        id: 3,
        nombre: "Vag Limones",
        price: 1340,
        image: vagLimones,
        alt: "imagen de Totebag con diseño de Limones.",
        description: "Totebag con diseño de limones, sobre tela color menta.",
        stock: 8
    }
]

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(info)
        reject("Oops! I did it again.")
        },2000);
    });

export default getProducts;