import {ContenedorMongo} from "../../contenedor/contenedorMongo.js";

class CarritosDaoMongo extends ContenedorMongo{
    constructor(model){
        super(model)
    }
}

export {CarritosDaoMongo}