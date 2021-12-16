
const products =[
    {id: 1, name: "Celular", price: "$8000", category:'celular', stock:20 ,img:'https://www.eltiempo.com/files/article_content/files/crop/uploads/2020/02/03/5e38409f1bcb0.r_1580745285279.168-0-1128-720.jpeg', description:"Motorola G20 128gb 4ram"},
    {id: 2, name: "Tablet",  price: "$9000", category:'tablet', stock:20 ,img:'https://static1.abc.es/media/favorito/2021/08/13/tablet-lenovo-10-pulgadas-U27241110355FQN-510x349@abc.jpg',description:"Tablet Samsung Galaxy"},
    {id: 3, name: "Iphone",  price: "$20000", category:'celular', stock:20 ,img:'https://sc04.alicdn.com/kf/Hde3a820d47e84e5bb1df4884feec60cfu.jpg',description:"Iphone 11 Pro 64GB"}]


const categories = [
{id:'celular', description:'Celular'},
{id:'tablet', description:'Tablet'},

]

export const getCategories = () =>{

    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(categories);
        },1000)
    })
}

export const getProducts = (category) =>{

    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
         category ? resolve(products.filter(product =>product.category === category)) : resolve(products)
        },1000)
    })
}


export const getProductById = (id) => {  
    return new Promise((resolve, reject) => {
        const product = products.find(prod => parseInt(prod.id) === parseInt(id))
        setTimeout(() => resolve(product), 1000)
    })
}


export const getItems = () =>{
    
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(products);
        },1000)
    })
}

