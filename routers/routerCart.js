import { Router } from "express"
import { 
    addProductAtCartController,
    deleteCartController, 
    deleteProductAtCartController, 
    getProductsAtCartController
} from "../controllers/cartController.js"
import { requireAuth } from "../middlewares/authorization.js"

const cart = new Router()
// controllers
cart.delete("/:id_cart", requireAuth, deleteCartController) 
cart.post("/:id_cart/products", requireAuth, addProductAtCartController) 
cart.get("/:id_cart/products", requireAuth, getProductsAtCartController) 
cart.delete("/:id_cart/products/:id_product", requireAuth, deleteProductAtCartController) 

export default cart