const products = [
    {id:1, name: "Mancuerna", price: "$ 1750",stock: 20,quantity : 0,category:"musculacion",detail:"Aparato gimnástico formado por una barra de metal con una o más piezas pesadas en cada extremo, que se usa para hacer ejercicios musculares. ", img :"https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/mancuerna-hexagonal-odea-10-kg-11-cc777ac81f2c3f76e416244933857566-1024-1024.png"},
    {id:2, name: "Pelota", price: "$ 1570",stock: 50,quantity : 0,category:"musculacion",detail:"Este es el detalle del producto.", img:"https://cronicaglobal.elespanol.com/uploads/s1/16/93/19/64/chica-estirando-la-espalda-con-la-pelota-de-fitball-mr-lee-en-unsplash.jpeg"},
    {id:3, name: "Botella deportiva", price:"$ 2300",quantity : 0,stock:100,category:"accesorios",detail:"Este es el detalle del producto.", img:"https://productospromocionales.com.ar/media/2020/10/botella-esmerilada-de-plastico-y-acero-1.jpg.webp"}

]

export const getProducts = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) =>{
    return new Promise((resolve, reject) =>
    {const product = products.find( prod => parseInt(prod.id)===parseInt(id))
        setTimeout(()=>resolve(product),1000)

    })
}

export const getProductByCategory = (category) =>{
    return new Promise((resolve, reject) => {
        const product = products.filter(prod => prod.category === category)
        setTimeout(() => resolve(product), 1000)
    })
}

export const getItem = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(products[0])
        }, 2000)
    })
}