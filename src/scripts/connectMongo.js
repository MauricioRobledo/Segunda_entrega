import mongoose from "mongoose";

const URL = "mongodb://127.0.0.1/ecommerce";

mongoose.connect(URL, {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
    .then(console.log("Conexion base de datos exitosa"))
    .catch(err=> console.log(err))


