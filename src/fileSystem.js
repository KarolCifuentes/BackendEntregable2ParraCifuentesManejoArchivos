/*const fs = require('fs')*/
/*import {promises as fs} from "fs"

const persona = async()=>{
    await fs.writeFile("./persona.txt", "Prueba de archivo") //writeFile crear y actualizar
    await fs.appendFile("./persona.txt", "\n archivo listo")  //appendFile agregar sin pisar
    let respuesta  = await fs.readFile("./persona.txt", "utf-8") //devuelve bytes Toca pasar un formato
    console.log(respuesta)
    await fs.unlink("./persona.txt") //oculta el archivo
};

persona()*/


import {promises as fs} from "fs"

 class ProductManager {
    constructor() {
        this.patch = "./product.txt"
        this.products = []
    }

    static id = 0

    addProduct = async (title, description, price, thumbnail, code, stock) => {

        ProductManager.id++
        let newProduct ={
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: ProductManager.id
        }
        //console.log(newProduct)
        this.products.push(newProduct)
        await fs.writeFile(this.patch, JSON.stringify(this.products))
    }


    readProduct = async () => {
        let respuesta = await fs.readFile(this.patch, "utf-8")
        return JSON.parse(respuesta)
    }


     getProduct = async () => {
        let respuesta2 = await this.readProduct()
        return await console.log(respuesta2)
     }


     getProductById = async (id) => {
        let respuesta3 = await this.readProduct()

        if(!respuesta3.find(product => product.id === id)){
            console.log("El producto no se encuentra")
        }else{
            console.log(respuesta3.find(product => product.id === id))
        }
     }

     deleteProductById = async (id) => {
        let respuesta3 = await this.readProduct()
        let productFilter = respuesta3.filter(product => products.id != id)

        console.log(productFilter)

     }
 }

 const product = new ProductManager

 /*product.addProduct("title1", "description1", 500, "thumbnail1", "0001", 2)
 product.addProduct("title2", "description2", 1000, "thumbnail1", "00022", 1)*/

 //product.getProduct()

 //product.getProductById(2)

 product.deleteProductById(2)
