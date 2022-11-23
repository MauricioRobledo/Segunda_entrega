import path from "path";
import { cartModel } from "../models/modelCart.js";
import { productModel } from "../models/modelProduct.js";
import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url)
const __dirname =path.dirname(_filename)

export const options = {

    fileSystem: {
        pathProducts: 'productos.json',
        pathCarts: 'carritos.json',
    },

    mariaDB:{
        client:"mysql",
        connection:{
            host:"127.0.0.1",
            user:"root",
            password:"",
            database:"desafiodb"
        }
    },
    sqliteDB:{
        client:"sqlite3",
        connection:{
            filename: path.join(__dirname, "../DB/ecommerce.sqlite")
        }
    },
    mongoDB:{
        modelCart: cartModel,
        modelProduct: productModel
    }
}

