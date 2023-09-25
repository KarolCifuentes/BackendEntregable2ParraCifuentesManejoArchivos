const fs = require('fs')

const persona = async()=>{
    await fs.promises.writeFile("./persona.txt", "Prueba de archivo")
}

persona()
/* import {promises as fs} from "fs"

 class ProductManager {
    constructor(){
        this.patch = "./product.txt"

    }

    static id = 0

    addProduct = async () => {
        await fs.writeFile(this.patch, "Prueba")

    }
 }

 const product = new ProductManager

 product.addProduct()*/