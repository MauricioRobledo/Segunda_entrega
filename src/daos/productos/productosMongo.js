import {ContenedorMongo} from "../../contenedor/contenedorMongo.js";

class ProductosDaoMongo extends ContenedorMongo{
    constructor(model){
        super(model)
    }
}

export {ProductosDaoMongo}