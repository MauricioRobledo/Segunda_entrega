import {options} from "../config/dbConfig.js"

let ContenedorDaoProductos
let ContenedorDaoCarritos

let databaseType = "mongo";

switch(databaseType){
    case "archivos":
        const {ProductosDaoArchivos} = await import("./productos/productoArchivo.js")
        const {CarritoDaoArchivos} = await import("./carrito/carritoArchivo.js")
        ContenedorDaoProductos = new ProductosDaoArchivos(options.fileSystem.pathProducts)
        ContenedorDaoCarritos = new CarritoDaoArchivos(options.fileSystem.pathCarts) 
        break;
    case "sqlite":
        const {ProductosDaoSqlite} = await import("./productos/productosSql.js")
        const {CarritosDaoSqlite} = await import("./carrito/carritoSql.js")
        ContenedorDaoProductos = new ProductosDaoSqlite(options.sqliteDB, "productos")
        ContenedorDaoCarritos = new CarritosDaoSqlite(options.sqliteDB, "carritos")
        break

    case "mariadb":
        const {ProductosDaoMariadb} = await import("./productos/productosSql.js")
        const {CarritosDaoMariadb} = await import("./carrito/carritoSql.js")
        ContenedorDaoProductos = new ProductosDaoMariadb(options.mariaDB, "products")
        ContenedorDaoCarritos = new CarritosDaoMariadb(options.mariaDB, "cart")
        break
    case "mongo":
        const{ProductosDaoMongo} = await import("./productos/productosMongo.js")
        const{CarritosDaoMongo} = await import("./carrito/carritoMongo.js")
        ContenedorDaoProductos = new ProductosDaoMongo(options.mongoDB.modelProduct)
        ContenedorDaoCarritos = new CarritosDaoMongo(options.mongoDB.modelCart)
        break

}
export {ContenedorDaoProductos,ContenedorDaoCarritos}