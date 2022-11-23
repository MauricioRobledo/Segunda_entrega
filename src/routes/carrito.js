import express from "express";
import {ContenedorDaoProductos, ContenedorDaoCarritos} from "../daos/index.js";

const productosApi = ContenedorDaoProductos;
const carritosApi = ContenedorDaoCarritos;

//router carritos
const carritoRouter = express.Router();

carritoRouter.get('/', async (req, res) => {
    const response = await carritosApi.getAll();
    res.json(response);
})

carritoRouter.post('/', async (req, res) => {
    const cart = {
        timestamp: Date.now(),
        products: []
    }
    const carrito = await carritosApi.save(cart)
    res.json({
        message:"Carrito creado",

    })
})

carritoRouter.delete('/:id', async (req, res) => {
    const cartId = parseInt(req.params.id);
    res.json(await carritosApi.deleteById(cartId));
})

carritoRouter.get('/:id/productos', async (req, res) => {
    const cartId = parseInt(req.params.id);
    const carritoResponse = await carritosApi.getById(cartId);
    const product = carritoResponse[0].products
    res.json({
        message:"Producto encontrado",
        result: product
    })
})

carritoRouter.post('/:id/productos', async (req, res) => {
    const cartId = parseInt(req.params.id);
    const productId = parseInt(req.body.id);
    const product = await productosApi.getById(productId)
    await carritosApi.addProduct(cartId,product)
    res.json("Producto guardado en el carrito")

})

carritoRouter.delete('/:id/productos/:idProd', async (req, res) => {
    const cartId = parseInt(req.params.id);
    const productId = parseInt(req.params.idProd);
    const product = await productosApi.getById(productId)
    await carritosApi.removeProduct(cartId, product)
    res.json("Pruducto eliminado")

})

export {carritoRouter}